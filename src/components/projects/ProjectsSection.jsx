import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import projectsData from "./projectsData";
import { useLanguage } from "../../context/LanguageContext";
import { Section, Container, SectionHeader } from "../ui/Section";

const TAGS = ["All", "React", "JS", "WordPress"];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const { tr } = useLanguage();
  const p = tr("projects");

  const filtered = projectsData.filter((x) => x.tag.includes(tag));

  return (
    <Section id="projects" $alt>
      <Container>
        <SectionHeader tag={p.tag} title={p.title} subtitle={p.subtitle} tight />
        <TagRow>
          {TAGS.map((t) => <ProjectTag key={t} onClick={setTag} name={t} isSelected={tag === t} />)}
        </TagRow>
        <Grid>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: Math.min(index, 6) * 0.05 }}
              >
                <ProjectCard title={project.title} tag={project.tag[1]} img={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />
              </motion.div>
            ))}
          </AnimatePresence>
        </Grid>
      </Container>
    </Section>
  );
};

export default ProjectsSection;

const TagRow = styled.div`display: flex; flex-wrap: wrap; gap: 0.6rem; margin-bottom: 2.25rem;`;
const Grid = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem;
  @media (max-width: 64em) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 40em) { grid-template-columns: 1fr; }
`;
