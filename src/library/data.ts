import React from 'react'
import { CgWorkAlt } from "react-icons/cg";
import { FaMapPin } from "react-icons/fa";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Full-Stack Web Developer",
        companyTitle: "Freelance",
        location: "Turkey",
        locationIcon: React.createElement(FaMapPin),
        description: "I create web sites, e-commerce system, b2b-b2c applications, payment applications, payment integrations and custom web applications.",
        skills: "Php, Laravel, RestAPI, Node.js, Mysql, React.js, Next.js, MongoDb, Socket.io, Javascript, JQuery",
        icon: React.createElement(CgWorkAlt),
        date: "01.2020 - Still Working",
    },
    {
        title: "Full-Stack Web Developer",
        companyTitle: "Ödüyo Online Payment",
        location: "Istanbul",
        locationIcon: React.createElement(FaMapPin),
        description: "I worked as a full-stack web developer. I was fixing bugs, developing legacy codes, creating new modules and integration with banks and accounting systems.",
        skills: "Php, Laravel, RestAPI, Mysql, Javascript, JQuery",
        icon: React.createElement(CgWorkAlt),
        date: "06.2022 - 12.2023",
    },
    {
        title: "Full-Stack Web Developer",
        companyTitle: "TD Team Aviation",
        location: "Antalya",
        locationIcon: React.createElement(FaMapPin),
        description: "I was managing web sites and developing branch's web sites. I created e-commerce education web application and airport solution center application for tracking plane which are need repair.",
        skills: "Php, Laravel, RestAPI, Node.js, Mysql, React.js, Next.js, MongoDb, Socket.io, Javascript, JQuery",
        icon: React.createElement(CgWorkAlt),
        date: "04.2019 - 05.2021",
    },
    {
        title: "Full-Stack Web Developer",
        companyTitle: "Dijital Bilisim",
        location: "Istanbul",
        locationIcon: React.createElement(FaMapPin),
        description: "I was testing and managing web applications, creating corporate and e-commerce web sites. Created a custom CRM system.",
        skills: "Php, MySql, Javascript, Jquery",
        icon: React.createElement(CgWorkAlt),
        date: "05.2018 - 04.2019",
    },
    {
        title: "Junior Web Developer",
        companyTitle: "Mobex",
        location: "Bursa",
        locationIcon: React.createElement(FaMapPin),
        description: "I was testing web and desktop applications and creating corporate web sites.",
        skills: "Php, MySql, Javascript",
        icon: React.createElement(CgWorkAlt),
        date: "12.2017 - 05.2018",
    },
] as const;

export const projectsData = [
    {
        title: "CorpComment",
        description:
            "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
        imageUrl: "/corpcomment.png",
    },
    {
        title: "rmtDev",
        description:
            "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: "/rmtdev.png",
    },
    {
        title: "Word Analytics",
        description:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: "/wordanalytics.png",
    },
] as const;

export const skillsData = [
    "Php",
    "Laravel",
    "Node.js",
    "Express",
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind",
    "Framer Motion",
    "MySql",
    "MongoDB",
    "Git",
    "Jira",
] as const;