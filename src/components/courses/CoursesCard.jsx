import React from "react";
import styled  from "styled-components";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

const coursesCard = ({ title,tag, img, Url, previewUrl }) => {
  return (
    <Section>
      <ImgContainer
        className="group"
      >
        <img src={img} />
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <a
            href={Url} 
            target="_blank"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </a>
          <a
            href={previewUrl}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </a>
        </div>
      </ImgContainer>
      <Box >
        <h5 className=" text-xl font-semibold mb-2">{title}</h5>
        <p className="text-black text-sm">Tag: {tag}</p>
        {/*
        <br/>
         <p className="text-[#ADB7BE] text-md">Project Description: {description}</p> */}
      </Box>
    </Section>
  );
};
const Section = styled.section`
  width: 90%;
  margin: auto;
  background-color: ${(props) => props.theme.body};
  position: relative;
  color: ${(props) => props.theme.text};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled.div`
  width: 100%;
  margin: 2rem auto;
  align-self: center;
  padding: 4%;
  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;

    & > *:last-child {
      & > *:first-child {
        margin-top: 0;
      }
    }
  }
`;
const ImgContainer = styled.div`
  width: auto;
  height: auto;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.body};
  border-radius: 20px;
  position: relative;
  cursor: pointer;

`;

const Img = styled.img`
width: auto;
height: auto;
`;
export default coursesCard;
