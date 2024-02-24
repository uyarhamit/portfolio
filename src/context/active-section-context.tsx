"use client";

import { links } from "@/library/data";
import React, { useState, createContext, useContext } from "react";

type typeLinks = (typeof links)[number]["hash"];
type ActiveSectionContextProps = { children: React.ReactNode };
type ActiveLinkContextType = {
  activeLink: typeLinks;
  setActiveLink: React.Dispatch<React.SetStateAction<typeLinks>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};
export const ActiveLinkContext = createContext<ActiveLinkContextType | null>(
  null
);

export default function ActiveSectionContext({
  children,
}: ActiveSectionContextProps) {
  const [activeLink, setActiveLink] = useState<typeLinks>("#home");
  const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);
  return (
    <ActiveLinkContext.Provider
      value={{ activeLink, setActiveLink, timeOfLastClick, setTimeOfLastClick }}
    >
      {children}
    </ActiveLinkContext.Provider>
  );
}

export function useActiveLinkContext() {
  const context = useContext(ActiveLinkContext);

  if (context === null) {
    throw new Error(
      "useActiveLinkContext must be used within a ActiveLinkContext"
    );
  }
  return context;
}
