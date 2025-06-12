"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Image from "next/image";
import Link from "next/link";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import microTech_Banner from "@/assets/assets/work/microtech/microTech_Banner.png";
import fstWork from "@/assets/assets/work/thumb1.png";
import sndWork from "@/assets/assets/work/thumb2.png";

const Projects = [
  {
    num: "01",
    category: "Portfolio",
    title: "MicroTech co",
    description:
      "Website that you can use to build your custom website!, with variant components and customizable navbar, footer, and SEO.",
    stack: [
      { name: "Figma" },
      { name: "NextJs" },
      { name: "ReactJs" },
      { name: "Html" },
      { name: "Css" },
      { name: "Tailwind" },
      { name: "Javascript" },
      { name: "PHP" },
      { name: "Laravel" },
    ],
    image: microTech_Banner,
    live: "https://tech-solutions-site.netlify.app/",
    github: "",
  },
  // {
  //   num: "02",
  //   category: "Accounting",
  //   title: "Industrial Accounting website",
  //   description:
  //     " Industrial Accounting website. It contains all sections related to industrial accounting, including invoices, receipts, reports, etc..., in addition to other administrative and communication sections such as permissions, chat, email, and many other sections.",
  //   stack: [
  //     { name: "ReactJs" },
  //     { name: "Html" },
  //     { name: "Css" },
  //     { name: "Tailwind" },
  //     { name: "Javascript" },
  //     { name: "PHP" },
  //     { name: "Laravel" },
  //   ],
  //   image: "",
  //   live: "",
  //   github: "",
  // },
];

const Work = () => {
  const [project, setProject] = useState(Projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(Projects[currentIndex]);
  };
  return Projects.length > 0 ? (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-6 px-4 mt-2 xl:px-0 overflow-hidden"
    >
      <div className="container mx-auto overflow-hidden">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] w-full overflow-hidden">
          <div
            className=" xl:h-[460px] 
          flex flex-col xl:justify-between order-2 xl:w-[50%] xl:order-none  "
          >
            <div className="flex flex-col  gap-[30px] h-[50%] ">
              <div
                className="text-8xl leading-none font-extrabold
              text-transparent text-outline"
              >
                {project?.num}
              </div>
              <h2
                className="text-[42px] font-bold leading-none text-white
              group-hover:text-accent transition-all duration-500 capitalize"
              >
                {project?.category} project
              </h2>
              <h2
                className="text-[24px] font-semibold leading-none text-accent
              group-hover:text-accent transition-all duration-500 capitalize"
              >
                {project?.title}
              </h2>
              <p className="text-white/60">{project?.description}</p>
              <ul className="flex flex-wrap gap-4">
                {project?.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item?.name}
                      {index !== project?.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {project?.live != null &&
                project?.live != undefined &&
                project?.live != "" ? (
                  <Link href={project?.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger
                          className="w-[70px] h-[70px] rounded-full
                      bg-white/5 cursor-pointer flex justify-center items-center group"
                        >
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : null}
                {project?.github != null &&
                project?.github != undefined &&
                project?.github != "" ? (
                  <Link href={project?.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger
                          className="w-[70px] h-[70px] rounded-full
                      bg-white/5 cursor-pointer flex justify-center items-center group"
                        >
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>github project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
          <div className="xl:w-[50%] overflow-hidden">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {Projects?.map((item, index) => {
                console.log(item);
                return (
                  <SwiperSlide key={index}>
                    <div
                      className="h-[460px] relative group flex justify-center
                    items-center bg-primary"
                    >
                      <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          alt="project"
                          src={item?.image}
                          fill
                          className="object-contain w-full"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent  cursor-pointer text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  ) : null;
};

export default Work;
