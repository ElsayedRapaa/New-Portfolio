import React from "react";
import Container from "../components/container";
import PageTitle from "../components/page-title";
import { MdOutlineMailOutline, MdOutlineLocationOn } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import ContactItem from "../components/contact-item";
import SendEmail from "../components/send-email";

const Contact = () => {
  return (
    <div className="py-16">
      <Container>
        <PageTitle title="Contact" subTitle="Get in Touch" center />
        <div className="mt-16 flex justify-between items-start md:space-x-8 space-x-0 space-y-8 md:space-y-0 md:flex-row flex-col-reverse">
          <div className="md:w-1/2 w-full bg-gray-800/50 border border-gray-700 rounded-lg shadow-lg p-8 md:mt-0 mt-8">
            <h2 className="text-2xl font-semibold text-white mb-8">
              Let's Connect
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              I'm open to fully remote Frontend Developer opportunities and
              selected freelance projects. For professional inquiries, please
              contact me by email.
            </p>
            <ContactItem
              icon={MdOutlineMailOutline}
              title="Professional Email"
              value="Elsayedrapaa7@gmail.com"
              border="border-emerald-500/20"
              bg="bg-emerald-500/10"
              bg2="bg-emerald-500/20"
              color="text-emerald-400"
            />
            <ContactItem
              icon={MdOutlineLocationOn}
              title="Location"
              value="Bilbeis, Sharqia, Egypt"
              border="border-purple-500/20"
              bg="bg-purple-500/10"
              bg2="bg-purple-500/20"
              color="text-purple-400"
            />
          </div>
          <div className="md:w-1/2 w-full bg-gray-800/50 border border-gray-700 rounded-lg shadow-lg p-8">
            <div className="flex items-center space-x-2 mb-8">
              <FaRegMessage size={22} className="text-blue-400 mt-1" />
              <h2 className="text-white text-2xl font-semibold">
                Send a Message
              </h2>
            </div>
            <SendEmail />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
