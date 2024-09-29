/* import { Routes, Route } from "react-router-dom";
import Test01 from "./Page/main";
import Test02 from "./Page/Works";

const Router = () => {
  return <Routes></Routes>;
};

export default Router;
 */
import styled from "@emotion/styled";

export const Chip_L_filled = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  width: fit-content;
  height: fit-content;
  background-color: ${(props) => props.theme.Bg.white};
  color: #222222;
  padding: 12px 32px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.8rem;
`;
