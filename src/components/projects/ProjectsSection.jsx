import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import styled from "styled-components";
import projectsData from "./projectsData";
import { useLanguage } from "../../context/LanguageContext";

const TAGS = ["All", "React", "JS", "WordPress"];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { tr } = useLanguage();
  const projects = tr('projects');

  const filteredProjects = projectsData.filter((p) => p.tag.includes(tag));
  const cardVariants = { initial: { y: 30, opacity: 0 }, animate: { y: 0, opacity: 1 } };

  return (
    <Section id="projects">
      <Header>
        <SectionTag>{projects.tag}</SectionTag>
        <SectionTitle>{projects.title}</SectionTitle>
      </Header>
      <TagRow>
        {TAGS.map((t) => <ProjectTag key={t} onClick={setTag} name={t} isSelected={tag === t} />)}
      </TagRow>
      <Grid ref={ref}>
        {filteredProjects.map((project, index) => (
          <motion.div key={project.id} variants={cardVariants} initial="initial"
            animate={isInView ? "animate" : "initial"} transition={{ duration: 0.3, delay: index * 0.1 }}>
            <ProjectCard title={project.title} tag={project.tag[1]} description={project.description} img={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />
          </motion.div>
        ))}
      </Grid>
    </Section>
  );
};

export default ProjectsSection;

const Section = styled.section`
  width: 100%; background-color: #13131f; padding: 6rem 0 7rem; position: relative;
  &::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(0,212,255,0.2), transparent); }
`;
const Header = styled.div`width: 88%; max-width: 1200px; margin: 0 auto 3rem; display: flex; flex-direction: column; gap: 0.75rem;`;
const SectionTag = styled.span`font-size: 0.8rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #00d4ff;`;
const SectionTitle = styled.h2`font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 700; color: #e2e8f0; line-height: 1.2;`;
const TagRow = styled.div`width: 88%; max-width: 1200px; margin: 0 auto 2.5rem; display: flex; flex-wrap: wrap; gap: 0.75rem;`;
const Grid = styled.div`
  width: 88%; max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;
  @media (max-width: 64em) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 40em) { grid-template-columns: 1fr; }
`;
