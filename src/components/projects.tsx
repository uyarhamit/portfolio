"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/library/data";
import Project from "./project";
import { useHooks } from "@/library/hooks";

export default function Projects() {
  const { ref } = useHooks("#projects", 0.5);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>my project</SectionHeading>
      {projectsData.map((project, index) => (
        <React.Fragment key={index}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </section>
  );
}
