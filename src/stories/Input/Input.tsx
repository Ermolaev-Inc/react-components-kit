import React from "react";
import styled from "styled-components";

export interface InputProps {
  type: "text" | "password";
  placeholder: string;
  fontFamily: string;
  fontSize: string;
  textColor: string;
  textWeight: number;
  placeholderWeight: number;
  borderColor: string;
  borderFocusColor: string;
  [name: string]: any;
}

const InputStyle = styled.input<InputProps>`
  font-family: ${props => props.fontFamily};
  font-weight: ${props => props.textWeight};
  padding-bottom: 5px;
  background-color: transparent;
  border-bottom-width: 4px;
  border-bottom-color: ${props => props.borderColor};
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  width: 30%;
  height: 6%;
  margin-bottom: 5%;
  outline: none;
  color: ${props => props.textColor};
  font-size: ${props => props.fontSize};
  ::placeholder {
    color: ${props => props.borderColor};
    font-size: 24px;
    font-weight: ${props => props.placeholderWeight};
  }
  :focus {
    border-bottom-color: ${props => props.borderFocusColor};
    ::placeholder {
      color: transparent;
    }
  }
`;

export const Input: React.FC<Partial<InputProps>> = ({
  type = "text",
  placeholder = "Placeholder",
  fontFamily = "Roboto, Arial, serif",
  fontSize = "24px",
  textColor = "#000000",
  textWeight = 400,
  placeholderWeight = 400,
  borderColor = "#e6e6e6",
  borderFocusColor = "#79c7ff",
  ...props
}) => {
  return <InputStyle
    type={type}
    placeholder={placeholder}
    fontFamily={fontFamily}
    fontSize={fontSize}
    textColor={textColor}
    textWeight={textWeight}
    placeholderWeight={placeholderWeight}
    borderColor={borderColor}
    borderFocusColor={borderFocusColor}
    {...props}
  />;
};
