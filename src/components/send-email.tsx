import React, { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { RiTelegram2Line } from "react-icons/ri";

const SendEmail = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current || isSending) return;

    setIsSending(true);
    try {
      await emailjs.sendForm(
        "service_mwu43fq",
        "template_976tdpx",
        form.current,
        "emYSGza6oL-wtUVki"
      );
      toast.success("Message sent successfully! Thank you for reaching out.");
      form.current.reset();
    } catch {
      toast.error("Message could not be sent. Please try again or email me directly.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label className="block text-gray-300 mb-2 text-sm font-medium">Email</label>
      <input
        type="email"
        name="email"
        placeholder="you@example.com"
        autoComplete="email"
        required
        className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 mb-6 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors text-white"
      />

      <label className="block text-gray-300 mb-2 text-sm font-medium">Message</label>
      <textarea
        name="message"
        placeholder="Your message here..."
        required
        minLength={5}
        rows={8}
        className="w-full bg-gray-700/50 border border-gray-600 rounded-xl px-4 py-3 mb-6 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors resize-none text-white"
      />

      <button
        type="submit"
        disabled={isSending}
        className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-xl w-full duration-200 flex items-center justify-center font-medium disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <RiTelegram2Line size={24} className="mr-2" />
        {isSending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default SendEmail;
