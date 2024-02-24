"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { useHooks } from "@/library/hooks";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const { ref } = useHooks("#contact");
  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>contact me</SectionHeading>
      <p className="text-gray-100">
        Please contact me directly at{" "}
        <a
          className="underline hover:text-blue-700"
          href="mailto:info@uyarhamit.com"
        >
          info@uyarhamit.com
        </a>
      </p>
      <form action="" className="mt-10 flex flex-col">
        <input
          type="email"
          className="h-14 rounded-lg border border-black/10 outline-none text-gray-600 p-5 dark:focus:bg-gray-600 dark:focus:text-white transition"
          placeholder="Your e-mail"
          required
        />
        <textarea
          cols={30}
          rows={5}
          className="h-52 my-3 rounded-lg border border-black/10 p-4 outline-none text-gray-600 px-5 py-5 dark:focus:bg-gray-600 dark:focus:text-white transition"
          placeholder="Your message"
        ></textarea>
        <button
          type="submit"
          className="group bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-800 hover:scale-110 font-medium flex items-center justify-center gap-2 transition dark:bg-gray-950"
        >
          Send{" "}
          <FaPaperPlane className="group-hover:translate-x-2 group-hover:-translate-y-1 transition" />
        </button>
      </form>
    </motion.section>
  );
}
