import React from "react";

import { InputProps } from "../Input";
import { InputOpenWrapper } from "../InputStyles";

export const InputOpen: React.FC<Partial<InputProps>> = ({
  type = "text",
  placeholder = "Placeholder",
  placeholderColor = "#E6E6E6",
  placeholderWeight = 400,
  fontFamily = "Roboto, Arial, serif",
  fontSize = "24px",
  textColor = "#000000",
  textWeight = 400,
  width = "280px",
  height = "30px",
  borderColor = "#E6E6E6",
  borderFocusColor = "#79C7FF"
}) => {
  return (
    <InputOpenWrapper
      type={type}
      placeholder={placeholder}
      placeholderColor={placeholderColor}
      placeholderWeight={placeholderWeight}
      fontFamily={fontFamily}
      fontSize={fontSize}
      textColor={textColor}
      textWeight={textWeight}
      width={width}
      height={height}
      borderColor={borderColor}
      borderFocusColor={borderFocusColor}
    />
  );
};