"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { useHooks } from "@/library/hooks";
import { experiencesData } from "@/library/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experiences() {
  const { ref, inView } = useHooks("#experience", 0.2);
  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>my experiences</SectionHeading>
      <VerticalTimeline layout="2-columns">
        {experiencesData.map((experience, index) => {
          return (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible={inView}
                className="vertical-timeline-element--work text-gray-600"
                contentStyle={{
                  background: "rgb(217, 217, 217)",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(217, 217, 217)",
                }}
                date={experience.date}
                dateClassName="text-white"
                iconStyle={{ background: "rgb(17, 24, 39)", color: "#fff" }}
                icon={experience.icon}
              >
                <h3 className="vertical-timeline-element-title font-extrabold">
                  {experience.title}
                </h3>
                <h4 className="flex items-center vertical-timeline-element-subtitle font-medium">
                  {experience.locationIcon} {experience.location}
                </h4>
                <p>{experience.description}</p>
                <p><b>Stacks: </b> {experience.skills}</p>
              </VerticalTimelineElement>
            </React.Fragment>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
