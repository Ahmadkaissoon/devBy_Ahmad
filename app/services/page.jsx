"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I specialize in building responsive, high-performance websites with a strong focus on user experience. With over 2 years of front-end development experience, I’ve crafted modern interfaces using leading frameworks like React.js and Next.js. I create clean, maintainable code and scalable front-end architectures that bring digital products to life across devices and browsers. Whether it's a dynamic single-page app or a full-featured website, I deliver fast, accessible, and visually engaging solutions tailored to your needs.",
    href: "/contact",
  },
  {
    num: "02",
    title: "UX/UI",
    description:
      "With 2 years of experience in UI/UX, I craft user-centered designs that are both visually appealing and highly functional. Using Figma, I create wireframes, prototypes, and polished interfaces. My UX process includes building user personas, conducting empathy-based research, and applying proven strategies to ensure a seamless and intuitive user experience from start to finish.",
    href: "/contact",
  },
  {
    num: "03",
    title: "SEO",
    description:
      "I offer foundational SEO services to help improve website visibility and performance in search engines. With hands-on experience in optimizing on-page content, metadata, and site structure, I focus on practical strategies that support better rankings and user engagement. While I’m still growing in advanced SEO techniques, I bring a strong understanding of best practices that contribute to long-term success.",
    href: "/contact",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center py-12 xl:py-0 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full
                  bg-white group-hover:bg-accent transition-all duration-500 flex
                  justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent *:transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
