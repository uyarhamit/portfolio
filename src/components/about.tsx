"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useHooks } from "@/library/hooks";

export default function About() {
  const { ref } = useHooks("#about");
  return (
    <motion.section
      ref={ref}
      className="mt-10 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After graduating with a associate degree in Electronic, i decided to
        pursue my passion for programming. I have been working as full-stack web
        developer about +6 years.
      </p>
      <p>
        Generally i worked in e-commerce and payment web applications. I create
        integrate with local banks, payment and accounting applications. I
        create custom modules and developing legacy codes.
      </p>
    </motion.section>
  );
}
