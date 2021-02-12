import React from "react";
import styled from "styled-components";

export interface InputProps {
  type: "text" | "password";
  placeholder: string;
  textColor: string;
  borderColor: string;
  borderFocusColor: string;
}

const InputStyle = styled.input<InputProps>`
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
  font-size: 24px;
  ::placeholder {
    color: ${props => props.borderColor};
    font-size: 24px;
    font-weight: 500;
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
  textColor = "#000000",
  borderColor = "#e6e6e6",
  borderFocusColor = "#79c7ff"
}) => {
  return <InputStyle
    type={type}
    placeholder={placeholder}
    textColor={textColor}
    borderColor={borderColor}
    borderFocusColor={borderFocusColor}
  />;
};
