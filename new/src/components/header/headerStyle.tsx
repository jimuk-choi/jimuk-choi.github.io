import styled from "@emotion/styled";
import Logo from "../../logo.svg";

export const Header = styled.header`
  font-size: 2.4rem;
  width: 100%;
  height: 80px;
  display: flex;
  padding: 0 80px;
  box-sizing: border-box;
  position: fixed;
  top: 24px;
  z-index: 999;
`;

export const Header_InnerBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  background-color: #fff;
  padding: 0 32px;
`;

export const LogoBox = styled.div`
  display: flex;
  width: 205px;
`;

export const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
