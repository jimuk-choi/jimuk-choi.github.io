import styled from "@emotion/styled";

interface MainSectionProps {
  variant?: "primary" | "secondary";
}

export const MainSectionTitleWrapper = styled.div`
  width: 100%;
  height: 100vh;
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

export const MainSectionTitle = styled.h1<
  MainSectionProps & { isDarkMode: boolean }
>`
  mix-blend-mode: ${(props) => (props.isDarkMode ? "exclusion" : "color-burn")};
  position: absolute;
  font-size: 16rem;
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.Color.white};
  font-weight: 700;
  letter-spacing: 10px;
  line-height: normal;
  top: -20%;
  left: 50%;
  transform: translate(-50%, 0%);
`;

export const Heading01 = styled.h1<MainSectionProps & { isDarkMode: boolean }>`
  mix-blend-mode: ${(props) => (props.isDarkMode ? "exclusion" : "color-burn")};
  width: 100%;
  text-align: center;
  font-size: 4rem;
  color: ${(props) => props.theme.Color.white};

  font-weight: 700;
  letter-spacing: 4%;
  line-height: normal;
  letter-spacing: 4px;
`;
