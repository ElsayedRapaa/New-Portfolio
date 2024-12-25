import React from "react";
import Container from "../components/container";
import PageTitle from "../components/page-title";

import { aboutSkills } from "../data/about-skills";
import AboutCardSkills from "../components/about-card-skills";

import { FaRegHeart } from "react-icons/fa6";
import { FiCoffee } from "react-icons/fi";

const About = () => {
  return (
    <div
      className="
        py-16
      "
    >
      <Container>
        <PageTitle title="Get To Know Me" subTitle="About Me" center />
        <div
          className="
            flex
            flex-col
            gap-y-8
            mt-16
          "
        >
          <div
            className="
              border
              border-gray-700/50
              bg-gray-800/50
              max-w-4xl
              mx-auto
              p-8
              mb-12
              shadow-xl
              rounded-2xl
              animate-text-bigger
            "
          >
            <p
              className="
                text-gray-300
                leading-relaxed
                mb-6
                text-lg
                capitalize
              "
            >
              With 6 years of front-end development experience, I specialize in
              building scalable applications and solving complex technical
              challenges. My passion lies in creating efficient and maintainable
              code and exploring new technologies to deliver innovative
              solutions.
            </p>
            <div
              className="
                flex
                items-center
                gap-x-4
                text-gray-400
                capitalize
              "
            >
              <FaRegHeart size={24} color="#f87171" />
              <span>Passionate about clean code and modern technologies</span>
            </div>
          </div>
          <div
            className="
              grid
              lg:grid-cols-3
              md:grid-cols-2
              grid-cols-1
              gap-4
            "
          >
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
          <div
            className="
              bg-gray-800/50
              border-gray-700/50
              p-8
              rounded-2xl
              shadow-xl
              max-w-4xl
              mx-auto
              mt-12
              animate-text-bigger
            "
          >
            <div
              className="
                flex
                items-center
                gap-x-4
                mb-6
              "
            >
              <FiCoffee size={28} color="#FACC15" />
              <h3 className="text-2xl font-semibold text-white">
                Personal Interests
              </h3>
            </div>
            <p
              className="
                text-gray-300
                leading-relaxed
              "
            >
              In my free time, I enjoy hiking, photography, and contributing to
              open-source projects. I believe in continuous learning and often
              explore new frameworks and languages to stay at the forefront of
              technology.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
