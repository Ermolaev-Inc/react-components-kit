import React from "react";
import styled from "styled-components";

import { ButtonRectProps } from "../Button";

const ButtonWrapper = styled.button<ButtonRectProps>`
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  background-color: ${props => props.backgroundColor};
  border: 0;
  color: ${props => props.textColor};
  font-weight: ${props => props.textWeight};
  border-radius: 10px;
  text-decoration: none;
  transition: 0.4s;
  padding: 15px 30px;
  cursor: pointer;
  outline: none;
  :hover {
    box-shadow: 0 0 15px 5px ${props => props.backgroundColor};
  }
  :active {
    transition: 0.07s;
    box-shadow: none;
  }
`;

export const ButtonRect: React.FC<Partial<ButtonRectProps>> = ({
  title = "OK",
  fontFamily = "Roboto, Arial, serif",
  fontSize = "18px",
  textColor = "#ffffff",
  textWeight = 400,
  backgroundColor = "#79c7ff",
  ...props
}) => {
  return (
    <ButtonWrapper
      fontFamily={fontFamily}
      fontSize={fontSize}
      textColor={textColor}
      textWeight={textWeight}
      backgroundColor={backgroundColor}
      {...props}
    >
      {title}
    </ButtonWrapper>
  );
};
