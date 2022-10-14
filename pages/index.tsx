import type { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import WorkExperience from "../components/WorkExperience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../lib/fetchPageInfo";
import { fetchSocials } from "../lib/fetchSocials";
import { fetchExperiences } from "../lib/fetchExperiences";
import { fetchSkills } from "../lib/fetchSkills";
import { fetchProjects } from "../lib/fetchProjects";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  const title = `${pageInfo?.name}'s Portfolio`;

  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen z-0 snap-y 
      snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scroll-smooth 
      scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
      <Head>
        <title>{title}</title>
        <meta name="description" content="Here's My Amazing Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 cursor-pointer">
          <div className="flex items-center justify-center">
            <div
              className="h-10 w-10 filter grayscale 
              hover:grayscale-0 cursor-pointer"
            >
              <Image
                src={urlFor(pageInfo?.heroImage).url()}
                alt="Logo"
                layout="fill"
                className="rounded-full"
              />
            </div>
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 1800,
  };
};
