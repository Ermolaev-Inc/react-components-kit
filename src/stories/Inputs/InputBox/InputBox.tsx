import React from "react";

import { InputBoxProps } from "../Input";
import { InputBoxWrapper } from "../InputStyles";

export const InputBox: React.FC<Partial<InputBoxProps>> = ({
  type = "text",
  placeholder = "Placeholder",
  placeholderColor = "#E6E6E6",
  placeholderWeight = 300,
  fontFamily = "Roboto, Arial, serif",
  fontSize = "20px",
  textColor = "#000000",
  textWeight = 400,
  width = "280px",
  height = "30px",
  borderColor = "#E6E6E6",
  borderFocusColor = "#79C7FF",
  borderShadowFocusColor = null
}) => {
  return (
    <InputBoxWrapper
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
      borderShadowFocusColor={borderShadowFocusColor}
    />
  );
};
