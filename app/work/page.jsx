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
import accounting1 from "@/assets/assets/work/accounting/accounting1.jpg";
// import accounting2 from "@/assets/assets/work/accounting/accounting2.jpg";
// import accounting3 from "@/assets/assets/work/accounting/accounting3.jpg";
// import accounting4 from "@/assets/assets/work/accounting/accounting4.jpg";
// import accounting5 from "@/assets/assets/work/accounting/accounting5.jpg";
// import accounting6 from "@/assets/assets/work/accounting/accounting6.jpg";
// import accounting7 from "@/assets/assets/work/accounting/accounting7.jpg";
// import accounting8 from "@/assets/assets/work/accounting/accounting8.jpg";
// import accounting9 from "@/assets/assets/work/accounting/accounting9.jpg";

const Projects = [
  {
    num: "01",
    category: "Portfolio",
    title: "MicroTech co",
    description:
      "Website that you can use to build your custom website!, with variant components and customizable navbar, footer, and SEO. And This site was built by our website",
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
  {
    num: "02",
    category: "Service product",
    title: "A product of MicroTech co",
    description:
      "A product related to accounting and financial management matters for large factories, taking into account speed and quality of data, in addition to simplicity in dealing and completing tasks, whether at the level of invoices, commercial bonds, or reports.",
    stack: [
      { name: "ReactJs" },
      { name: "Html" },
      { name: "Css" },
      { name: "Tailwind" },
      { name: "Javascript" },
      { name: "PHP" },
      { name: "Laravel" },
    ],
    image: accounting1,
    live: "",
    github: "",
  },
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
            className="xl:h-[80vh] max-h-[80vh] overflow-y-auto pr-2
            flex flex-col xl:justify-between order-2 xl:w-[50%] xl:order-none"
          >
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project?.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project?.category} project
              </h2>
              <h2 className="text-[24px] font-semibold leading-none text-accent group-hover:text-accent transition-all duration-500 capitalize">
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
              <div className="flex items-center gap-4 mb-4">
                {project?.live && (
                  <Link href={project.live} target="_blank">
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
                )}
                {project?.github && (
                  <Link href={project.github} target="_blank">
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
                )}
              </div>
            </div>
          </div>

          <div className="xl:w-[50%] overflow-hidden">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[80vh] mb-12"
              onSlideChange={handleSlideChange}
            >
              {Projects?.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div
                      className="h-[60vh] xl:h-[70vh] relative group flex justify-center
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
                btnStyles="bg-accent cursor-pointer text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  ) : null;
};

export default Work;
