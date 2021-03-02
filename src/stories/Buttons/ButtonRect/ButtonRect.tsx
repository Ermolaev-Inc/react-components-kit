import React from "react";

import { ButtonRectProps } from "../Button";
import { ButtonRectWrapper, SVGWrapper } from "../ButtonStyles";

export const ButtonRect: React.FC<Partial<ButtonRectProps>> = ({
  svg = null,
  svgWidth = "40px",
  svgHeight = "20px",
  title = "OK",
  fontFamily = "Roboto, Arial, serif",
  fontSize = "18px",
  textColor = "#ffffff",
  textWeight = 400,
  backgroundColor = "#79c7ff",
  ...props
}) => {
  return (
    <ButtonRectWrapper
      fontFamily={fontFamily}
      fontSize={fontSize}
      textColor={textColor}
      textWeight={textWeight}
      backgroundColor={backgroundColor}
      {...props}
    >
      {svg ? <SVGWrapper src={svg} svgWidth={svgWidth} svgHeight={svgHeight} /> : title}
    </ButtonRectWrapper>
  );
};
