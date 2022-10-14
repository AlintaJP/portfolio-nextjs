import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import Image from "next/image";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative text-center md:text-left 
      md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center 
      h-screen"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px] 
        text-gray-500 text-2xl"
      >
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="relative -mb-20 md:mb-0 flex-shrink-0 w-56 h-56
        md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      >
        <Image
          src={urlFor(pageInfo?.profilePicture).url()}
          alt="Profile Picture"
          layout="fill"
          objectFit="cover"
          className="rounded-full md:rounded-lg"
        />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
};

export default About;
