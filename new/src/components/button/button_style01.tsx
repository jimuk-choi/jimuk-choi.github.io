import styled from "@emotion/styled";

interface ButtonProps {
  variant?: "primary" | "secondary";
}

export const Button_A = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.variant === "primary"
      ? props.theme.Bg.Button_Primary
      : props.theme.Bg.Button_Secondary};
  color: ${(props) =>
    props.variant === "primary"
      ? props.theme.Color.Button_Primary
      : props.theme.Color.Button_Secondary};
  padding: 12px 48px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.8rem;
`;

export const Button_B = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.variant === "secondary"
      ? props.theme.Bg.Button_Secondary
      : props.theme.Bg.Button_Primary};
  color: ${(props) =>
    props.variant === "secondary"
      ? props.theme.Color.Button_Secondary
      : props.theme.Color.Button_Primary};
  padding: 12px 48px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.8rem;
`;
