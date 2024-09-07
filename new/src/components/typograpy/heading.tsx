import styled from "@emotion/styled";

interface MainSectionTitleWrapperProps {
  variant?: "primary" | "secondary";
}

export const MainSectionTitleWrapper = styled.div<MainSectionTitleWrapperProps>`
  width: 100%;
  height: 100vh;
  /* background-color: ${(props) =>
    props.variant === "primary"
      ? props.theme.Bg.whitef8f
      : props.theme.Bg.whitefff}; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainSectionTitleWrapperInnerBox = styled.div`
  width: 100%;
  height: 160px;
  position: relative;
`;

export const MainSectionTitle = styled.h1`
  mix-blend-mode: overlay;
  position: absolute;
  font-size: 16rem;
  color: #000000;
  font-weight: 700;
  letter-spacing: 8%;
  line-height: normal;
  top: -20%;
  left: 50%;
  transform: translate(-50%, 0%);
`;

export const Heading01 = styled.h1`
  font-size: 4rem;
  color: #000000;
  font-weight: 700;
  letter-spacing: 4%;
  line-height: normal;
`;
