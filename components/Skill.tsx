import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import Image from "next/image";
import { urlFor } from "../sanity";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

const Skill = ({ skill, directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full border border-gray-500
        w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 filter transition
        group-hover:grayscale duration-300 ease-in-out relative"
      >
        <Image
          src={urlFor(skill?.image).url()}
          layout="fill"
          objectFit="contain"
          alt={skill.title}
          className="rounded-full bg-white"
        />
        <div
          className="absolute opacity-0 group-hover:opacity-80 
        transition duration-300 group-hover:bg-white h-20 w-20
        md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
        >
          <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">
              {skill.progress}%
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skill;
