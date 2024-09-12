import styled from "@emotion/styled";

export const Subtitle_M = styled.p<{ isDarkMode: boolean }>`
  font-size: 2.4rem;
  color: ${(props) => props.theme.Color.white};
  font-weight: 300;
  letter-spacing: 4px;
  text-align: center;
`;
