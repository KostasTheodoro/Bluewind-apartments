"use client";
import React, { useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaCircleXmark, FaSpinner } from "react-icons/fa6";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    message: string;
    icon: React.ReactNode;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      setFormData({
        ...formData,
        [name]: value.replace(/[^0-9]/g, ""),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus({
      message: "Sending...",
      icon: <FaSpinner className="animate-spin text-primary text-3xl" />,
    });

    try {
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({
          message: "Message sent successfully!",
          icon: <IoIosCheckmarkCircle className="text-green-500 text-3xl" />,
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus({
          message: "Error sending message. Try again later.",
          icon: <FaCircleXmark className="text-red-500 text-3xl" />,
        });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus({
        message: "Network error. Try again later.",
        icon: <FaCircleXmark className="text-red-500 text-3xl" />,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
    >
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-semibold leading-6 text-primary">
              First name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-neutral-slate shadow-sm 
              ring-1 ring-inset ring-primary placeholder:text-neutral-slate focus:ring-2 focus:ring-inset 
              focus:ring-primary focus:outline-none sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold leading-6 text-primary">
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-neutral-slate shadow-sm 
              ring-1 ring-inset ring-primary placeholder:text-neutral-slate focus:ring-2 focus:ring-inset 
              focus:ring-primary focus:outline-none sm:text-sm sm:leading-6"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-primary">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-neutral-slate shadow-sm 
              ring-1 ring-inset ring-primary placeholder:text-neutral-slate focus:ring-2 focus:ring-inset 
              focus:ring-primary focus:outline-none sm:text-sm sm:leading-6"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-primary">
              Phone number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              inputMode="numeric"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-neutral-slate shadow-sm 
              ring-1 ring-inset ring-primary placeholder:text-neutral-slate focus:ring-2 focus:ring-inset 
              focus:ring-primary focus:outline-none sm:text-sm sm:leading-6"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-primary">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-neutral-slate shadow-sm 
              ring-1 ring-inset ring-primary placeholder:text-neutral-slate focus:ring-2 focus:ring-inset 
              focus:ring-primary focus:outline-none sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="inline-block bg-primary text-neutral-white border-2 border-primary 
            font-bold px-8 py-3 rounded-xl text-lg shadow-md hover:bg-primary-coral hover:text-primary 
            hover:shadow-lg focus:ring-1 focus:ring-neutral-slate transition-transform duration-300 transform 
            hover:scale-95"
          >
            Send message
          </button>
        </div>
        {status && (
          <div className="flex pt-12 items-center gap-4 text-neutral-slate mt-4 text-primary text-xl font-bold">
            <span>{status.message}</span>
            {status.icon}
          </div>
        )}
      </div>
    </form>
  );
}
