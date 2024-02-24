"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin, BsArrowDown } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useHooks } from "@/library/hooks";
import { useActiveLinkContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useHooks("#home");
  const { setActiveLink, setTimeOfLastClick } = useActiveLinkContext();
  return (
    <section ref={ref} id="home" className="scroll-mt-28 mb-28">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "keyframes",
              duration: 0.2,
            }}
          >
            <Image
              className="h-52 w-36 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              src="/profile.png"
              width={150}
              height={150}
              quality={95}
              property="true"
              alt="Hamit Uyar"
            />
          </motion.div>
          <motion.span
            className="absolute top-100 bottom-0 left-0 text-4xl"
            initial={{ opacity: 0.5, rotate: -50 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 1 }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hello, I'm Hamit Uyar. I'm a full-stack developer with 6+ years of
        experience. I use PHP (laravel), javascript, jquery, mysql as
        professional. I improve myself in nodejs, react.js and next.js.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          href="#contact"
          onClick={() => {
            setActiveLink("#contact");
            setTimeOfLastClick(Date.now());
          }}
          className="group flex items-center gap-2 bg-gray-950 rounded-full text-white px-7 py-3 outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact Me Here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
        </Link>

        <a
          href="#"
          className="group flex items-center gap-2 bg-white rounded-full text-black px-7 py-3 outline-none focus:scale-110 hover:scale-110 hover:bg-gray-50 transition cursor-pointer"
        >
          Download CV{" "}
          <HiDownload className="opacity-70 group-hover:translate-y-2 transition" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="blank"
          className="bg-white p-4 text-gray-700 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-50 transition"
        >
          <BsLinkedin />
        </a>
        <a
          href="#"
          className="bg-white p-4 text-gray-700 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-50 transition"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
