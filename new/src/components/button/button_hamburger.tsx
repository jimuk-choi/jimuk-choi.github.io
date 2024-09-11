import styled from "@emotion/styled";

export const HamburgerMenuButton = styled.button`
  font-size: 16rem;
  transition: 0.2s ease-in-out;
  &:hover {
    color: ${(props) => props.theme.Color.Button_Third};
  }
`;
