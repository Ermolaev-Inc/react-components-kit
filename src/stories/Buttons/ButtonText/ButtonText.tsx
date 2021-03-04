import React from "react";
import styled from "styled-components";

import { ButtonProps } from "../Button";
import { ButtonWrapper, SVGWrapper } from "../ButtonStyles";

const TextButtonTitle = styled.span`
  cursor: pointer;
  transition: 0.5s;
  :hover {
    opacity: 50%;
  }
`;

export const ButtonText: React.FC<Partial<ButtonProps>> = ({
  svg = null,
  svgWidth = "40px",
  svgHeight = "20px",
  title = "Button",
  fontFamily = "Roboto, Arial, serif",
  fontSize = "18px",
  textColor = "#000000",
  textWeight = 400,
  ...props
}) => {
  return (
    <ButtonWrapper
      textColor={textColor}
      fontFamily={fontFamily}
      fontSize={fontSize}
      textWeight={textWeight}
      {...props}
    >
      <TextButtonTitle>
        {svg ? <SVGWrapper src={svg} svgWidth={svgWidth} svgHeight={svgHeight} /> : title}
      </TextButtonTitle>
    </ButtonWrapper>
  );
};
