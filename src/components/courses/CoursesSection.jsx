import React, { useState, useRef } from "react";
import CoursesCard from "./CoursesCard";
import CoursesTag from "./CoursesTag";
import { motion, useInView } from "framer-motion";
import styled from "styled-components";
import CoursesData from "./CoursesData";
import { useLanguage } from "../../context/LanguageContext";

const TAGS = ["All", "QA", "Programming", "Oracle-Alura", "Others"];

const CoursesSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { tr } = useLanguage();
  const courses = tr('courses');

  const filteredCourses = CoursesData.filter((c) => c.tag.includes(tag));
  const cardVariants = { initial: { y: 30, opacity: 0 }, animate: { y: 0, opacity: 1 } };

  return (
    <Section id="certificates">
      <Header>
        <SectionTag>{courses.tag}</SectionTag>
        <SectionTitle>{courses.title}</SectionTitle>
      </Header>
      <TagRow>
        {TAGS.map((t) => <CoursesTag key={t} onClick={setTag} name={t} isSelected={tag === t} />)}
      </TagRow>
      <Grid ref={ref}>
        {filteredCourses.map((course, index) => (
          <motion.div key={index} variants={cardVariants} initial="initial"
            animate={isInView ? "animate" : "initial"} transition={{ duration: 0.3, delay: index * 0.08 }}>
            <CoursesCard title={course.title} tag={course.tag[1]} img={course.image} Url={course.Url} previewUrl={course.previewUrl} />
          </motion.div>
        ))}
      </Grid>
    </Section>
  );
};

export default CoursesSection;

const Section = styled.section`
  width: 100%; background-color: #10101a; padding: 6rem 0 7rem; position: relative;
  &::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(124,58,237,0.25), transparent); }
`;
const Header = styled.div`width: 88%; max-width: 1200px; margin: 0 auto 3rem; display: flex; flex-direction: column; gap: 0.75rem;`;
const SectionTag = styled.span`font-size: 0.8rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #7c3aed;`;
const SectionTitle = styled.h2`font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 700; color: #e2e8f0; line-height: 1.2;`;
const TagRow = styled.div`width: 88%; max-width: 1200px; margin: 0 auto 2.5rem; display: flex; flex-wrap: wrap; gap: 0.75rem;`;
const Grid = styled.div`
  width: 88%; max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;
  @media (max-width: 64em) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 40em) { grid-template-columns: 1fr; }
`;
