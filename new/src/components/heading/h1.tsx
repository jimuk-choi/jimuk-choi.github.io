import styled from "@emotion/styled";

interface MainSectionTitleWrapperProps {
  variant?: "primary" | "secondary";
}

export const MainSectionTitleWrapper = styled.div<MainSectionTitleWrapperProps>`
  width: 100%;
  height: 100vh;
  background-color: ${(props) =>
    props.variant === "primary"
      ? props.theme.Bg.whitef8f
      : props.theme.Bg.whitefff};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainSectionTitle = styled.h1`
  mix-blend-mode: overlay;
  font-size: 16rem;
  color: #000000;
  font-weight: 700;
  letter-spacing: 12.8px;
  line-height: normal;
`;
