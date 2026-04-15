import styled from "styled-components";
import { useLayoutEffect, useRef } from "react";
import { useWindowScroll } from "react-use";

export function ScrollToTop() {
  const ref = useRef(null);
  const { y } = useWindowScroll();

  const scrollTo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.style.display = y > 300 ? "flex" : "none";
    }
  }, [y]);

  return (
    <Up ref={ref} onClick={scrollTo} aria-label="Back to top">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </Up>
  );
}

const Up = styled.button`
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #00d4ff, #7c3aed);
  border: none;
  border-radius: 12px;
  color: #fff;
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  z-index: 999;
  cursor: pointer;
  display: none;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 20px rgba(0, 212, 255, 0.3);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 28px rgba(0, 212, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;
