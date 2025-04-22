"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import { Toaster, toast } from "sonner";

const formSchema = z.object({
  firstname: z
    .string()
    .min(2, { message: "First name must be at least 2 characters !" })
    .max(50, { message: "First name must be less than 50 characters !" })
    .regex(/^[a-zA-Z]+$/, { message: "First name can only contain letters !" }),
  lastname: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters !" })
    .max(50, { message: "Last name must be less than 50 characters !" })
    .regex(/^[a-zA-Z]+$/, { message: "Last name can only contain letters !" }),
  email: z.string().email({ message: "Please enter a valid email address !" }),
  number: z
    .string()
    .regex(/^\+?[0-9\s\-]+$/, {
      message: "Please enter a valid phone number !",
    }),
  service: z.string({
    required_error: "Please select a service !",
    invalid_type_error: "Please Select a service !",
  }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters !" })
    .max(500, { message: "Message must be less than 500 characters !" }),
});

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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      number: "",
      service: "",
      message: "",
    },
  });

  const sendEmail = async (e) => {
    try {
      const promise = emailjs.sendForm(
        "service_95brxtb",
        "template_vgt0abh",
        form.current,
        "X164oHU5h2txluSLq"
      );

      toast.promise(promise, {
        loading: "Sending your message...",
        success: () => {
          reset();
          return "Message sent successfully!";
        },
        error: "Failed to send message. Please try again.",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
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
      <Toaster
        position="top-right"
        toastOptions={{
          classNames: {
            toast:
              "group-[.toaster]:bg-[#27272c] group-[.toaster]:text-white group-[.toaster]:border-white/10 group-[.toaster]:shadow-lg",
            description: "group-[.toast]:text-white/60",
            actionButton:
              "group-[.toast]:bg-accent group-[.toast]:text-primary",
            cancelButton: "group-[.toast]:bg-white/10",
            error:
              "group-[.toaster]:bg-red-900/20 group-[.toaster]:text-red-600 group-[.toaster]:border-red-900/30",
            success:
              "group-[.toaster]:bg-green-900/20 group-[.toaster]:text-green-600 group-[.toaster]:border-green-900/30",
            loading:
              "group-[.toaster]:bg-[#27272c] group-[.toaster]:text-accent",
          },
        }}
      />
      <div className="container w-full mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
          {/* form section */}
          <div className="xl:w-[54%] w-full">
            <form
              ref={form}
              onSubmit={handleSubmit(sendEmail)}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    {...register("firstname")}
                    type="text"
                    placeholder="Firstname"
                  />
                  {errors.firstname && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.firstname.message}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    {...register("lastname")}
                    type="text"
                    placeholder="Lastname"
                  />
                  {errors.lastname && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.lastname.message}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="Email address"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    {...register("number")}
                    type="text"
                    placeholder="Phone number"
                  />
                  {errors.number && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.number.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Select {...register("service")}>
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
                {errors.service && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.service.message}
                  </p>
                )}
              </div>

              <div>
                <Textarea
                  {...register("message")}
                  className="h-[200px]"
                  placeholder="Type your message here."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

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
