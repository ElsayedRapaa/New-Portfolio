import React from "react";
import Container from "../components/container";
import PageTitle from "../components/page-title";
import { projects } from "../data/projects";
import ProjectCard from "../components/project-card";

const Projects = () => {
  return (
    <div className="py-16">
      <Container>
        <PageTitle title="My Work" subTitle="Featured Projects" center />
        <div className="mt-16">
          <div
            className="
              grid
              md:grid-cols-2
              grid-cols-1
              gap-8
            "
          >
            {projects.map((item) => (
              <ProjectCard
                key={item.id}
                title={item.title}
                href={item.href}
                skills={item.skills}
                color={item.color}
                bgGradient={item.bgGradient}
                animation={item.animation}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
