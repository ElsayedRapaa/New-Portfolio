import React from "react";
import Container from "../components/container";
import PageTitle from "../components/page-title";
import { FaAward } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";
import { LuGraduationCap, LuBookOpen } from "react-icons/lu";

const Resume = () => {
  const experience = [
    {
      role: "Independent Frontend Developer",
      company: "Independent Projects & Professional Development",
      period: "2025 – Present",
      points: [
        "Build and improve independent web application projects while continuing practical frontend development and technical learning.",
        "Work with React.js, Next.js, JavaScript, and TypeScript, exploring modern framework capabilities and application patterns.",
        "Developed an inventory and invoice management application as an independent project, using AI-assisted development tools and personally reviewing and modifying generated code."
      ]
    },
    {
      role: "Frontend Developer",
      company: "Soft Tech · Remote · Full-time",
      period: "2022 – 2025",
      points: [
        "Worked as the sole frontend developer within a team that included backend developers, taking ownership of frontend implementation across assigned applications.",
        "Built and maintained user interfaces with React.js and Next.js, from translating requirements into components through integration and delivery.",
        "Implemented responsive layouts, reusable components, forms, dashboards, and application interfaces using modern frontend libraries and styling tools.",
        "Integrated frontend applications with APIs and connected data services; when required, worked with database services through the Next.js application layer without taking on a backend engineering role.",
        "Collaborated with backend developers and the project manager to clarify requirements, coordinate integration, and resolve implementation issues.",
        "Communicated with the team through Slack and Telegram and focused on delivering assigned work within agreed timelines."
      ]
    },
    {
      role: "Freelance Frontend Developer",
      company: "Self-Employed",
      period: "2020 – 2022",
      points: [
        "Completed seven freelance projects through the Freelancer platform, alongside opportunities from developer communities, referrals, and direct contacts.",
        "Worked with clients on selected projects to understand requirements, clarify expectations, and agree on deliverables.",
        "Built responsive user interfaces and frontend features, delivered completed work, and handled revisions and follow-up changes."
      ]
    }
  ];

  return (
    <div className="py-16">
      <Container>
        <PageTitle title="My Professional Journey" subTitle="Resume" center />
        <div className="mt-16 max-w-4xl mx-auto space-y-12 animate-text-to-top">
          <section className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaAward size={28} className="text-blue-400" />
              <h2 className="text-2xl font-semibold text-white">Professional Summary</h2>
            </div>
            <div className="border border-gray-700 bg-gray-800/50 rounded-lg p-8 shadow-lg">
              <p className="leading-relaxed text-gray-300">
                Frontend Developer with 5+ years of professional experience
                building responsive, user-friendly web applications. I focus
                on React.js, Next.js, JavaScript, and TypeScript, with
                experience in API integration, state management, reusable UI
                components, and connecting applications to data services.
                Interested in fully remote opportunities with teams worldwide.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center space-x-4">
              <LuBookOpen size={28} className="text-blue-400" />
              <h2 className="text-2xl font-semibold text-white">Learning Journey</h2>
            </div>
            <div className="border border-gray-700 bg-gray-800/50 rounded-lg p-8 shadow-lg">
              <h3 className="text-lg font-semibold text-white">Self-Directed Web Development Learning</h3>
              <p className="text-blue-400 font-semibold mt-2">2015 – Present</p>
              <p className="leading-relaxed text-gray-300 mt-3">
                Began learning web development independently in 2015 through
                online learning resources, documentation, technical articles,
                developer communities, and consistent hands-on practice.
                Continued developing practical skills alongside professional
                work and independent projects.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <div className="flex items-center space-x-4">
              <MdWorkOutline size={28} className="text-blue-400" />
              <h2 className="text-2xl font-semibold text-white">Professional Experience</h2>
            </div>
            {experience.map((item) => (
              <div key={item.role} className="border border-gray-700 bg-gray-800/50 rounded-lg p-8 shadow-lg">
                <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                <span className="block text-blue-400 font-semibold mt-2">{item.company}</span>
                <span className="block text-sm text-gray-400 mb-4">{item.period}</span>
                <div className="space-y-3">
                  {item.points.map((point, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <TbPointFilled size={20} className="text-gray-300 mt-1 shrink-0" />
                      <p className="text-gray-300 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="space-y-6">
            <div className="flex items-center space-x-4">
              <LuGraduationCap size={28} className="text-blue-400" />
              <h2 className="text-2xl font-semibold text-white">Education</h2>
            </div>
            <div className="border border-gray-700 bg-gray-800/50 rounded-lg p-8 shadow-lg">
              <h3 className="text-lg font-semibold text-white">
                Bachelor of Commerce, Business Administration
              </h3>
              <span className="block text-blue-400 font-semibold mt-2">Zagazig University</span>
              <span className="block text-gray-400 text-sm">2014 – 2018</span>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Resume;
