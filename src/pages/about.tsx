import React from "react";
import Container from "../components/container";
import PageTitle from "../components/page-title";
import { aboutSkills } from "../data/about-skills";
import AboutCardSkills from "../components/about-card-skills";

const About = () => {
  return (
    <div className="py-16">
      <Container>
        <PageTitle title="Get To Know Me" subTitle="About Me" center />
        <div className="flex flex-col gap-y-8 mt-16">
          <div className="border border-gray-700/50 bg-gray-800/50 max-w-4xl mx-auto p-8 mb-4 shadow-xl rounded-2xl animate-text-bigger">
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              I began learning web development independently in 2015 through
              online resources, technical articles, documentation, and
              hands-on practice. Since 2020, I have been working professionally
              as a Frontend Developer, building responsive and user-friendly
              web applications.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              My main focus is frontend development with React.js, Next.js,
              JavaScript, and TypeScript. I enjoy turning requirements and
              designs into clear, reusable interfaces, integrating REST APIs,
              managing application state, and improving usability and
              performance.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              I can connect frontend applications to data and database
              services through React.js and Next.js integrations. My
              professional focus remains frontend engineering rather than
              backend development. I value clear team communication,
              dependable delivery, continuous learning, and practical
              problem-solving. I am interested in fully remote Frontend
              Developer opportunities with teams worldwide.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {aboutSkills.map((item) => (
              <AboutCardSkills
                key={item.id}
                mainIcon={item.mainIcon}
                title={item.title}
                description={item.description}
                color={item.color}
                bgGradient={item.bgGradient}
                animation={item.animation}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
