"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 2,
    text: "Years of experience",
  },
  {
    num: 6,
    text: "Projects completed",
  },
  {
    num: 200,
    text: "code commits",
  },
  {
    num: 2,
    text: "outside projects",
  },
];

const Status = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-8 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-8 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 10 ? "max-w-[100px]" : "w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Status;
