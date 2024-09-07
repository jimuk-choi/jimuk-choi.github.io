import styled from "@emotion/styled";
import Logo from "../../logo.svg";

interface HeadingProps {
  variant?: "primary" | "secondary";
}

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

export const Header_InnerBox = styled.div<
  HeadingProps & { isDarkMode: boolean }
>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  padding: 40px;
  background-color: ${(props) =>
    props.isDarkMode ? props.theme.Bg.whiteT20 : props.theme.Bg.white};
  padding: 0 32px;
`;

export const LogoBox = styled.div<HeadingProps & { isDarkMode: boolean }>`
  display: flex;
  align-items: center;
  width: 400px;
  gap: 1rem;
  p {
    color: ${(props) => props.theme.Color.Button_Secondary};
  }
`;

export const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
`;
