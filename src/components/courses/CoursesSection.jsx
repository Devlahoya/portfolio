import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import CoursesCard from "./CoursesCard";
import CoursesTag from "./CoursesTag";
import CoursesData from "./CoursesData";
import { useLanguage } from "../../context/LanguageContext";
import { Section, Container, SectionHeader } from "../ui/Section";

const TAGS = ["All", "QA", "Programming", "Oracle-Alura", "Others"];

const CoursesSection = () => {
  const [tag, setTag] = useState("All");
  const { tr } = useLanguage();
  const c = tr("courses");

  const filtered = CoursesData.filter((x) => x.tag.includes(tag));

  return (
    <Section id="certificates">
      <Container>
        <SectionHeader tag={c.tag} title={c.title} tight />
        <TagRow>
          {TAGS.map((t) => <CoursesTag key={t} onClick={setTag} name={t} isSelected={tag === t} />)}
        </TagRow>
        <Grid>
          <AnimatePresence mode="popLayout">
            {filtered.map((course, index) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: Math.min(index, 6) * 0.05 }}
              >
                <CoursesCard title={course.title} tag={course.tag[1]} img={course.image} Url={course.Url} previewUrl={course.previewUrl} />
              </motion.div>
            ))}
          </AnimatePresence>
        </Grid>
      </Container>
    </Section>
  );
};

export default CoursesSection;

const TagRow = styled.div`display: flex; flex-wrap: wrap; gap: 0.6rem; margin-bottom: 2.25rem;`;
const Grid = styled.div`
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem;
  @media (max-width: 64em) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 40em) { grid-template-columns: 1fr; }
`;
