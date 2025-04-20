"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+963) 937 006 335",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ahmad.kaissoon@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "SYR - Homs",
  },
];

const contact = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_95brxtb", // ✅ استبدلها بالقيمة من EmailJS
        "template_vgt0abh", // ✅ استبدلها بالقيمة من EmailJS
        form.current,
        "X164oHU5h2txluSLq" // ✅ استبدلها بالقيمة من EmailJS
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          console.log(form.current);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 px-4"
    >
      <div className="container w-full mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
          {/* form section */}
          <div className="xl:w-[54%] w-full">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstname"
                  type="text"
                  placeholder="Firstname"
                  required
                />
                <Input
                  name="lastname"
                  type="text"
                  placeholder="Lastname"
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  required
                />
                <Input
                  name="phone"
                  type="text"
                  placeholder="Phone number"
                  required
                />
              </div>

              <Select name="service">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="UX/UI">UX/UI</SelectItem>
                    <SelectItem value="SEO">SEO</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here."
                required
              />
              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>

          {/* info section */}
          <div className="xl:w-[46%] w-full flex items-start xl:justify-end">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default contact;
