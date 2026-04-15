import React from "react";
import styled from "styled-components";

const CoursesTag = ({ name, onClick, isSelected }) => {
  return (
    <Tag isSelected={isSelected} onClick={() => onClick(name)}>
      {name}
    </Tag>
  );
};

export default CoursesTag;

const Tag = styled.button`
  padding: 0.5rem 1.25rem;
  border-radius: 100px;
  border: 1px solid ${({ isSelected }) =>
    isSelected ? "rgba(124,58,237,0.5)" : "rgba(255,255,255,0.1)"};
  background: ${({ isSelected }) =>
    isSelected ? "rgba(124,58,237,0.12)" : "transparent"};
  color: ${({ isSelected }) => (isSelected ? "#a78bfa" : "rgba(226,232,240,0.5)")};
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: 'Space Grotesk', sans-serif;

  &:hover {
    border-color: rgba(124,58,237,0.35);
    color: #a78bfa;
  }
`;
