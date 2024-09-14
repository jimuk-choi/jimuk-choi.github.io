import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

const CursorStyle = styled.div<{ isDarkMode: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.Bg.Button_Primary};
  position: fixed;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  transition: width 0.15s ease-in-out, height 0.15s ease-in-out,
    transform 0.15s ease-in-out, background-color 0.15s ease-in-out;
  backdrop-filter: blur(4px);
  opacity: 0.8;

  &.hover {
    width: 60px;
    height: 60px;
    opacity: 0.6;
    /* background-color: ${(props) => props.theme.Bg.white90}; */
    border: 2px solid #ffffff;
  }
`;

interface CursorProps {
  isHovering: boolean;
  isDarkMode: boolean;
}

const Cursor = ({ isHovering, isDarkMode }: CursorProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // 마우스 움직임에 따라 커서 위치 업데이트
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <CursorStyle
      className={isHovering ? "hover" : ""} // Hover 상태에 따라 클래스 추가
      isDarkMode={isDarkMode}
      style={{ top: `${position.y}px`, left: `${position.x}px` }} // 커서 위치 적용
    />
  );
};

export default Cursor;
/* 
const Cursor = ({
  isHovering,
  isDarkMode, // Props로 추가
}: {
  isHovering: boolean;
  isDarkMode: boolean; // 타입 추가
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <CursorStyle
      className={isHovering ? "hover" : ""}
      isDarkMode={isDarkMode}
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    />
  );
};

export default Cursor;
 */
