import React from "react";
import styled from "styled-components";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

const ProjectCard = ({ title, description, tag, img, gitUrl, previewUrl }) => {
  return (
    <Card>
      <ImgContainer className="group">
        <img src={img} alt={title} />
        <Overlay className="overlay">
          {gitUrl && (
            <IconLink href={gitUrl} target="_blank" rel="noopener noreferrer" aria-label="View code">
              <CodeBracketIcon style={{ width: 22, height: 22 }} />
            </IconLink>
          )}
          {previewUrl && (
            <IconLink href={previewUrl} target="_blank" rel="noopener noreferrer" aria-label="Live preview">
              <EyeIcon style={{ width: 22, height: 22 }} />
            </IconLink>
          )}
        </Overlay>
      </ImgContainer>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        {tag && <CardTag>{tag}</CardTag>}
      </CardBody>
    </Card>
  );
};

export default ProjectCard;

const Card = styled.div`
  background: rgba(17, 17, 24, 0.9);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.25s ease;
  height: 100%;

  &:hover {
    border-color: rgba(0,212,255,0.2);
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0,0,0,0.4);
  }
`;

const ImgContainer = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 16/9;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.35s ease;
  }

  &:hover img {
    transform: scale(1.04);
  }

  &:hover .overlay {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(13,13,20,0.75);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const IconLink = styled.a`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(226,232,240,0.8);
  transition: all 0.2s ease;

  &:hover {
    border-color: #00d4ff;
    color: #00d4ff;
    background: rgba(0,212,255,0.1);
  }
`;

const CardBody = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const CardTitle = styled.h5`
  font-size: 1rem;
  font-weight: 600;
  color: #e2e8f0;
`;

const CardTag = styled.span`
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #00d4ff;
  padding: 2px 8px;
  background: rgba(0,212,255,0.08);
  border: 1px solid rgba(0,212,255,0.18);
  border-radius: 100px;
  width: fit-content;
`;
