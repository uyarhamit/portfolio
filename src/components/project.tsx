"use client";
import { projectsData } from "@/library/data";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  const OpacityProgress = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  return (
    <motion.div
      className="group mb-3 sm:mb-8 last:mb-0"
      ref={sectionRef}
      style={{
        scale: scaleProgress,
        opacity: OpacityProgress,
      }}
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] rounded-2xl hover:bg-gray-400 transition">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:float-right">
          <h3 className="text-2xl font-semibold text-gray-950">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
          group-even:right-[initial] 
          group-even:-left-40 
          
          group-even:group-hover:translate-x-3 
          group-even:group-hover:translate-y-3 
          group-even:group-hover:rotate-2

          group-hover:-translate-x-3 
          group-hover:translate-y-3 
          group-hover:-rotate-2

          group-hover:scale-110
          transition"
          src={imageUrl}
          alt={title}
          width={500}
          height={500}
          quality={95}
        />
      </section>
    </motion.div>
  );
}
