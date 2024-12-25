import React from "react";
import Container from "../components/container";
import PageTitle from "../components/page-title";
import SkillsCard from "../components/skills-card";
import { skills } from "../data/skills";

const Skills = () => {
  return (
    <div className="py-16">
      <Container>
        <PageTitle title="What I Know" subTitle="Technical Skills" center />
        <div
          className="
            mt-16
          "
        >
          <div
            className="
              grid
              lg:grid-cols-3
              sm:grid-cols-2
              grid-cols-1
              gap-4
            "
          >
            {skills.map((item) => (
              <SkillsCard
                key={item.id}
                mainIcon={item.mainIcon}
                title={item.title}
                skills={item.skills}
                bgGradient={item.bgGradient}
                color={item.color}
                animation={item.animation}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
