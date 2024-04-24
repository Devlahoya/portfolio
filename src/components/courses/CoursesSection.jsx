import React, { useState, useRef } from "react";
import CoursesCard from "./CoursesCard";
import CoursesTag from "./CoursesTag";
import { motion, useInView } from "framer-motion";
import styled from "styled-components";
import CoursesData from "./CoursesData";

const CoursesSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredCourses = CoursesData.filter((course) =>
    course.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <Section id="certificates">
      <Title >
        My Certificates
      </Title>
      <Container >
        <CoursesTag
          key="1"
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <CoursesTag
          key="2"
          onClick={handleTagChange}
          name="Programming"
          isSelected={tag === "Programming"}
        />
        <CoursesTag
          key="3"
          onClick={handleTagChange}
          name="QA"
          isSelected={tag === "QA"}
        />        
        <CoursesTag
          key="4"
          onClick={handleTagChange}
          name="Oracle-Alura"
          isSelected={tag === "Oracle-Alura"}
        />
        <CoursesTag
          key="5"
          onClick={handleTagChange}
          name="Others"
          isSelected={tag === "Others"}
        />
      </Container>
      
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredCourses.map((course, index) => (
          <motion.li
          
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.15, delay: index * 0.4 }}
          >
            <CoursesCard
              key={course.id}
              title={course.title}
              tag={course.tag[1]}
              img={course.image}
              Url={course.Url}
              previewUrl={course.previewUrl}
            />
          </motion.li>
          
        ))}
      </ul>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.body};
  position: relative;
  color: ${(props) => props.theme.text};
  overflow: hidden;
  padding-bottom: 5%;
  display: flex;
  align-items: center;
  flex-direction: column;

`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    width: 100%;
  }
  @media (max-width: 48em) {
    width: 100%;
    justify-content: center;
  }
`;


export default CoursesSection;
