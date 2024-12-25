import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { RiTelegram2Line } from "react-icons/ri";

const SendEmail = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_mwu43fq",
          "template_976tdpx",
          form.current,
          "emYSGza6oL-wtUVki"
        )
        .then(
          () => {
            toast.success("Email sent successfully!");
          },
          (error) => {
            toast.error("Failed to send email!", error);
          }
        );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label
        className="
          block
          text-gray-300
          mb-2
          text-sm
          font-medium
        "
      >
        Email
      </label>
      <input
        type="email"
        name="email"
        placeholder="you@example.com"
        required
        className="
        w-full
        bg-gray-700/50
        border
        border-gray-600
        rounded-xl
        px-4
        py-3
        mb-6
        focus:ring-2
        focus:ring-blue-400
        focus:border-transparent
        transition-colors
        text-white
      "
      />
      <label
        className="
          block
          text-gray-300
          mb-2
          text-sm
          font-medium
        "
      >
        Message
      </label>
      <textarea
        name="message"
        placeholder="Your message here..."
        required
        rows={8}
        className="
        w-full
        bg-gray-700/50
        border
        border-gray-600
        rounded-xl
        px-4
        py-3
        mb-6
        focus:ring-2
        focus:ring-blue-400
        focus:border-transparent
        transition-colors
        resize-none
        text-white
      "
      />
      <button
        className="
          bg-blue-400
          text-white
          py-3
          rounded-xl
          w-full
          hover:scale-105
          duration-200
          flex
          items-center
          justify-center
          bg-gradient-to-r 
          from-blue-500 
          to-blue-600 
          hover:from-blue-600 
          hover:to-blue-700
          font-medium
          disabled:opacity-50
        "
      >
        <RiTelegram2Line size={24} className="mr-2" /> Send Message
      </button>
    </form>
  );
};

export default SendEmail;
