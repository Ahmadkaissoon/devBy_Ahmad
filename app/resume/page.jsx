"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaWordpress,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";
import capIcon from "@/assets/assets/resume/cap.svg";
import badgeIcon from "@/assets/assets/resume/badge.svg";

const about = {
  title: "about me",
  description:
    "My journey began with a curiosity for how things work—now I craft the ‘how’ for others. Technology is my medium; impact is my goal.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "ahmad kaissoon",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+963) 937 006 335",
    },
    {
      fieldName: "Experience",
      fieldValue: "+2 Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Syrian",
    },
    {
      fieldName: "Email",
      fieldValue: "ahmad.kaissoon@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "Arabic - English",
    },
  ],
};

const Experiences = {
  icon: badgeIcon,
  title: "My experience",
  description:
    "From Hello World to scalable systems, my career has been a cycle of curiosity → code → iteration. Here’s where I’ve been—and where I’m headed next.",
  items: [
    {
      company: "Google",
      position: "Foundations of User Experience (UX) Design",
      duration: "2023",
      link: "/docs/Coursera_Foundations_of_User_Experience_(UX) Design.pdf",
    },
    {
      company: "Google",
      position: "Start the UX Design Process",
      duration: "2023",
      link: "/docs/Coursera_Start_the_UX_Design_Process.pdf",
    },
    {
      company: "HOMS Uni",
      position: "Eighth place in The 2023 ICPC HOMS University Contest",
      duration: "2023",
      link: "/docs/2024-ICPCHOMSUC-ahmad kaissoon-PLACE.pdf",
    },
    {
      company: "MicroTech",
      position: "Front-End Developer",
      duration: "2024 - 2025",
      link: false,
    },
    {
      company: "MicroTech",
      position: "UX/UI",
      duration: "2024 - 2025",
      link: false,
    },
    {
      company: "Freelancer",
      position: "Front-End Developer",
      duration: "2025 - present",
      link: false,
    },
  ],
};

const education = {
  icon: capIcon,
  title: "My education",
  description:
    "My education laid the foundation, but my curiosity wrote the code. From formal degrees to late-night tutorials, every lesson has sharpened my problem-solving skills and deepened my love for technology. Here’s a snapshot of the knowledge that fuels my craft—both inside and outside the classroom.",
  items: [
    {
      istitution: "Homs Uni",
      degree: "IT engineer - Software engineering specialty",
      duration: "2021 - Present",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "Languages, frameworks, and tools are my brushes—the code is my canvas. I wield them to build fast, efficient, and elegant solutions. Below is a snapshot of my technical arsenal, constantly evolving as I learn, break, and refine.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html5",
    },
    {
      icon: <FaCss3 />,
      name: "Css3",
    },
    {
      icon: <FaJs />,
      name: "Java script",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind css",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTypescript />,
      name: "Type script",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaWordpress />,
      name: "Wordpress",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="contianer mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList
            className="flex flex-col w-full 
          max-w-[380px] mx-auto xl:mx-0 gap-6"
          >
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full px-4">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-row items-center gap-4">
                  <Image
                    src={Experiences.icon}
                    width={30}
                    height={30}
                    alt="exp_icon"
                    className="object-contain"
                  />
                  <h3 className="text-4xl font-bold">{Experiences.title}</h3>
                </div>
                <p className="max-w-[1000px] text-white/60 mx-auto xl:mx-0">
                  {Experiences.description}
                </p>
                <ScrollArea className="h-[350px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {Experiences.items.map((item, index) => {
                      return item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="the_certificate"
                        >
                          <li
                            key={index}
                            className="bg-[#232329] h-[195px] py-6
                      px-10 rounded-xl flex flex-col justify-center items-center lg:items-start
                      gap-1 hover:text-accent duration-500"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.position}
                            </h3>
                            {item?.company ? (
                              <div className="flex items-center gap-3">
                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                <p className="text-white/60">{item.company}</p>
                              </div>
                            ) : null}
                          </li>
                        </a>
                      ) : (
                        <li
                          key={index}
                          className="bg-[#232329] h-[195px] py-6
                  px-10 rounded-xl flex flex-col justify-center items-center lg:items-start
                  gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          {item?.company ? (
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          ) : null}
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-row gap-4">
                  <Image
                    src={education.icon}
                    width={40}
                    height={40}
                    alt="edu_icon"
                    className="object-contain"
                  />
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                </div>
                <p className="max-w-[1000px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-max py-6
                      px-10 rounded-xl flex flex-col justify-center items-center lg:items-start
                      gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] flex flex-wrap text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.istitution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[1000px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger
                                className="w-full h-[150px] 
                          bg-[#232329] rounded-xl flex justify-center items-center cursor-pointer group"
                              >
                                <div className="text-6xl group-hover:text-accent  transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[1000px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6  mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center whitespace-nowrap xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
