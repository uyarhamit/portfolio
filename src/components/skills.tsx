"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/library/data";
import { motion } from "framer-motion";
import { useHooks } from "@/library/hooks";

const fadeInAnimationObj = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useHooks("#skills");
  return (
    <motion.section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28"
    >
      <SectionHeading>skills</SectionHeading>
      <ul className="flex flex-wrap gap-3 justify-center text-xs text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white border border-black/2 p-3 rounded-lg"
            key={index}
            variants={fadeInAnimationObj}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
