import React from "react";
import styled from "styled-components";

import { ButtonRoundProps } from "../Button";

const ButtonWrapper = styled.button<Partial<ButtonRoundProps>>`
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  background-color: ${props => props.backgroundColor};
  border: 0;
  color: ${props => props.textColor};
  font-weight: ${props => props.textWeight};
  border-radius: 50%;
  width: ${props => props.width};
  height: ${props => props.height};
  text-decoration: none;
  transition: 0.4s;
  padding: 30px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const ButtonRound: React.FC<Partial<ButtonRoundProps>> = ({
  title = "1",
  fontFamily = "Roboto, Arial, serif",
  fontSize = "18px",
  textColor = "#ffffff",
  textWeight = 400,
  backgroundColor = "#79c7ff",
  width = "40px",
  height = "40px",
  ...props
}) => {
  return (
    <ButtonWrapper
      fontFamily={fontFamily}
      fontSize={fontSize}
      textColor={textColor}
      textWeight={textWeight}
      backgroundColor={backgroundColor}
      width={width}
      height={height}
      {...props}
    >
      {title}
    </ButtonWrapper>
  );
};