import React from "react";
import styled from "styled-components";
import { EyeIcon } from "@heroicons/react/24/outline";

const CoursesCard = ({ title, tag, img, Url, previewUrl }) => {
  return (
    <Card>
      <ImgContainer className="group">
        <img src={img} alt={title} />
        <Overlay className="overlay">
          {(previewUrl || Url) && (
            <IconLink href={previewUrl || Url} target="_blank" rel="noopener noreferrer" aria-label="View certificate">
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

export default CoursesCard;

const Card = styled.div`
  background: rgba(17, 17, 24, 0.9);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.25s ease;
  height: 100%;

  &:hover {
    border-color: rgba(124,58,237,0.25);
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
    border-color: #a78bfa;
    color: #a78bfa;
    background: rgba(124,58,237,0.1);
  }
`;

const CardBody = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const CardTitle = styled.h5`
  font-size: 0.95rem;
  font-weight: 600;
  color: #e2e8f0;
  line-height: 1.4;
`;

const CardTag = styled.span`
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #a78bfa;
  padding: 2px 8px;
  background: rgba(124,58,237,0.08);
  border: 1px solid rgba(124,58,237,0.2);
  border-radius: 100px;
  width: fit-content;
`;
