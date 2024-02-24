"use client";

import React, { useContext } from "react";
import { motion } from "framer-motion";
import { links } from "@/library/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveLinkContext } from "@/context/active-section-context";

export default function Header() {
  const { activeLink, setActiveLink, setTimeOfLastClick } =
    useActiveLinkContext();
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-gray-300 border-opacity-40 bg-gray-200 bg-opacity-80 shadow-lg shadow-gray/[0.03] 
        backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-gray-900"
        initial={{ y: 0, x: "150%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:h-[initial] sm:py-0">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center text-[0.9rem] font-medium text-gray-950 sm:w-[initial] sm:flex-nowrap sm:gap-2">
            {links.map((link) => (
              <motion.li
                key={link.hash}
                className="h3/4 flex items-center justify-center"
                initial={{ y: "-150%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href={link.hash}
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 hover:text-gray-500 dark:text-white dark:hover:text-gray-700",
                    {
                      "text-gray-950 dark:text-white": link.hash === activeLink,
                    }
                  )}
                  onClick={() => {
                    setActiveLink(link.hash);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}
                  {link.hash === activeLink && (
                    <motion.span
                      className="bg-gray-300 rounded-full absolute inset-0 -z-10 opacity-50 h-11 dark:bg-gray-800"
                      layoutId="activeLink"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
