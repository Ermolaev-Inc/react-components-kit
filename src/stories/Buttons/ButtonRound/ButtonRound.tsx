import React from "react";

import { ButtonRoundProps } from "../Button";
import { ButtonRoundWrapper, SVGWrapper } from "../ButtonStyles";

export const ButtonRound: React.FC<Partial<ButtonRoundProps>> = ({
  svg = null,
  svgWidth = "20px",
  svgHeight = "20px",
  title = "OK",
  fontFamily = "Roboto, Arial, serif",
  fontSize = "18px",
  textColor = "#ffffff",
  textWeight = 400,
  backgroundColor = "#79c7ff",
  diameter = "40px",
  ...props
}) => {
  return (
    <ButtonRoundWrapper
      fontFamily={fontFamily}
      fontSize={fontSize}
      textColor={textColor}
      textWeight={textWeight}
      backgroundColor={backgroundColor}
      diameter={diameter}
      {...props}
    >
      {svg ? <SVGWrapper src={svg} svgWidth={svgWidth} svgHeight={svgHeight} /> : title}
    </ButtonRoundWrapper>
  );
};