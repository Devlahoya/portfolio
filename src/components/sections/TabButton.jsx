import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const TabButton = ({ active, selectTab, children }) => {
  return (
    <Btn onClick={selectTab} active={active}>
      {children}
      <motion.div
        animate={active ? "active" : "default"}
        variants={{ default: { width: 0 }, active: { width: "100%" } }}
        style={{
          height: "2px",
          background: "linear-gradient(90deg, #00d4ff, #7c3aed)",
          marginTop: "4px",
          borderRadius: "2px",
        }}
      />
    </Btn>
  );
};

export default TabButton;

const Btn = styled.button`
  background: transparent;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${({ active }) => (active ? "#e2e8f0" : "rgba(226,232,240,0.4)")};
  border-radius: 8px;
  transition: color 0.2s ease;

  &:hover {
    color: #e2e8f0;
  }
`;
