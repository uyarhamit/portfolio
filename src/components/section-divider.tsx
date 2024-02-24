"use client";
import React from "react";
import { BsArrowDown } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
import { useActiveLinkContext } from "@/context/active-section-context";

export default function SectionDivider() {
  const { setActiveLink } = useActiveLinkContext();
  return (
    <motion.div
      className="flex items-center justify-center cursor-pointer my-20"
      initial={{ x: 0, y: -1000, opacity: 0.5 }}
      animate={{ x: 0, y: 30, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <Link href="#about" onClick={() => setActiveLink("#about")}>
        <BsArrowDown className="text-4xl" />
      </Link>
    </motion.div>
  );
}
