import React from "react";
import Container from "../components/container";
import PageTitle from "../components/page-title";
import { experience } from "../data/experience";
import ExperienceCard from "../components/experience-card";

const Experience = () => {
  return (
    <div
      className="
        py-16
      "
    >
      <Container>
        <PageTitle title="Career Journey" subTitle="Experience" center />
        <div
          className="
            mt-16
            max-w-5xl
            space-y-8
            mx-auto
          "
        >
          {experience.map((item) => (
            <ExperienceCard
              key={item.id}
              title={item.title}
              subtitle={item.subTitle}
              date={item.date}
              desccription={item.description}
              color={item.color}
              bgGradient={item.bgGradient}
              animation={item.animation}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Experience;
