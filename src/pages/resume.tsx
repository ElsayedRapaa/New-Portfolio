import React from "react";
import Container from "../components/container";
import PageTitle from "../components/page-title";

import { FaAward } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";
import { LuGraduationCap } from "react-icons/lu";

const Resume = () => {
  return (
    <div className="py-16">
      <Container>
        <PageTitle title="My Professional Journey" subTitle="Resume" center />
        <div
          className="
            mt-16
            max-w-4xl
            mx-auto
            space-y-12
            animate-text-to-top
          "
        >
          <div
            className="
              space-y-6
            "
          >
            <div
              className="
                flex
                items-center
                space-x-4
              "
            >
              <FaAward size={28} className="text-blue-400" />
              <h2 className="text-2xl font-semibold text-white">Overview</h2>
            </div>
            <div
              className="
                border
                border-gray-700
                bg-gray-800/50
                rounded-lg
                p-8
                shadow-lg
              "
            >
              <p className="leading-relaxed text-gray-300">
                Front End Engineer with over 6 years of experience specializing
                in modern web technologies and scalable applications. Proven
                track record in developing robust solutions using React,
                TypeScript, and Next.js, etc. Passionate about creating
                efficient, user-friendly applications and mentoring junior
                developers. Strong expertise in frontend development, with a
                focus on performance optimization and best practices.
              </p>
              <div
                className="
                  flex
                  flex-wrap
                  space-x-4
                  mt-6
                "
              >
                <p className="py-1 px-2 rounded-2xl text-sm bg-blue-400 backdrop-blur-sm bg-opacity-20 text-blue-500">
                  Front End Development
                </p>
                <p className="py-1 px-2 rounded-2xl text-sm bg-green-700 backdrop-blur-sm bg-opacity-20 text-green-500">
                  Performance Optimization
                </p>
                <p className="py-1 px-2 rounded-2xl text-sm bg-red-400 backdrop-blur-sm bg-opacity-20 text-red-400">
                  Mentoring
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <MdWorkOutline size={28} className="text-blue-400" />
              <h2 className="text-2xl font-semibold text-white">
                Professional Experience
              </h2>
            </div>
            <div
              className="
                border
                border-gray-700
                bg-gray-800/50
                rounded-lg
                p-8
                max-w-5xl
                animate-text-to-top
                shadow-lg
              "
            >
              <h2 className="text-lg font-semibold text-white">
                Frontend Engineer
              </h2>
              <span className="block text-blue-400 font-semibold mt-2">
                Soft Tech
              </span>
              <span className="block text-sm text-gray-400 mb-4">
                01/07/2020 - 28/2/2024
              </span>
              <div
                className="
                  space-y-2
                "
              >
                <div
                  className="
                    flex
                    items-center
                    space-x-2
                  "
                >
                  <TbPointFilled size={24} className="text-gray-300" />
                  <p className="text-gray-300">
                    Developed dynamic web applications using React.js, Next.js,
                    and TypeScript.
                  </p>
                </div>
                <div
                  className="
                    flex
                    items-center
                    space-x-2
                  "
                >
                  <TbPointFilled size={24} className="text-gray-300" />
                  <p className="text-gray-300">
                    Implemented state management with Redux/Redux-Toolkit and
                    React Query for optimized data handling.
                  </p>
                </div>
                <div
                  className="
                    flex
                    items-center
                    space-x-2
                  "
                >
                  <TbPointFilled size={24} className="text-gray-300" />
                  <p className="text-gray-300">
                    Designed and developed reusable components with Tailwind
                    CSS, Bootstrap, and MUI.
                  </p>
                </div>
                <div
                  className="
                    flex
                    items-center
                    space-x-2
                  "
                >
                  <TbPointFilled size={24} className="text-gray-300" />
                  <p className="text-gray-300">
                    Integrated MongoDB, Google Firebase, and Appwrite for robust
                    backend and database solutions.
                  </p>
                </div>
                <div
                  className="
                    flex
                    items-center
                    space-x-2
                  "
                >
                  <TbPointFilled size={24} className="text-gray-300" />
                  <p className="text-gray-300">
                    Led CI/CD integration for automated deployment pipelines
                    using GitHub.
                  </p>
                </div>
                <div
                  className="
                    flex
                    items-center
                    space-x-2
                  "
                >
                  <TbPointFilled size={24} className="text-gray-300" />
                  <p className="text-gray-300">
                    Enhanced user experience with ShdeCN and responsive design
                    principles using HTML, CSS, and React-Hook-Form.
                  </p>
                </div>
                <div
                  className="
                    flex
                    items-center
                    space-x-2
                  "
                >
                  <TbPointFilled size={24} className="text-gray-300" />
                  <p className="text-gray-300">
                    Collaborated on full-stack solutions leveraging Neon-Tech
                    for scalable projects.
                  </p>
                </div>
                <div
                  className="
                    flex
                    items-center
                    space-x-2
                  "
                >
                  <TbPointFilled size={24} className="text-gray-300" />
                  <p className="text-gray-300">
                    Mentored junior developers in React-Hooks and Git workflows,
                    improving team efficiency.
                  </p>
                </div>
                <div
                  className="
                    flex
                    items-center
                    space-x-2
                  "
                >
                  <TbPointFilled size={24} className="text-gray-300" />
                  <p className="text-gray-300">
                    Built interactive dashboards and personalized interfaces
                    using React-Context.
                  </p>
                </div>
                <div
                  className="
                    flex
                    items-center
                    space-x-2
                  "
                >
                  <TbPointFilled size={24} className="text-gray-300" />
                  <p className="text-gray-300">
                    Conducted unit testing to maintain software quality and
                    ensure stability.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <LuGraduationCap size={28} className="text-blue-400" />
              <h2 className="text-2xl font-semibold text-white">Education</h2>
            </div>
            <div
              className="
                border
                border-gray-700
                bg-gray-800/50
                rounded-lg
                p-8
                max-w-5xl
                animate-text-to-top
                shadow-lg
              "
            >
              <h2
                className="
                  text-lg
                  font-semibold
                  text-white
                "
              >
                Bachelor of Commerce, Department of Business Administration
              </h2>
              <span className="block text-blue-400 font-semibold mt-2">
                Zagazig University
              </span>
              <span className="block text-gray-400 text-sm">2014 - 2018</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Resume;
