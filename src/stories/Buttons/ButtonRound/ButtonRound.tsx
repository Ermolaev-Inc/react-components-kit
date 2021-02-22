import React from "react";

import { ButtonRoundProps } from "../Button";
import { ButtonRoundWrapper } from "../ButtonStyles";

export const ButtonRound: React.FC<Partial<ButtonRoundProps>> = ({
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
      {title}
    </ButtonRoundWrapper>
  );
};