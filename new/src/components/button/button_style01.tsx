import styled from "@emotion/styled";

interface ButtonProps {
  variant?: "primary" | "secondary";
}

export const Button_A = styled.button<ButtonProps & { isDarkMode: boolean }>`
  background-color: ${(props) => props.theme.Bg.Button_Primary};
  color: ${(props) => props.theme.Color.Button_Primary};
  padding: 12px 48px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.8rem;
`;

export const Button_B = styled.button<ButtonProps & { isDarkMode: boolean }>`
  background-color: ${(props) => props.theme.Bg.Button_Secondary};
  color: ${(props) => props.theme.Color.Button_Secondary};
  border: 1px solid ${(props) => props.theme.Border.Button_Secondary};
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.8rem;
`;
