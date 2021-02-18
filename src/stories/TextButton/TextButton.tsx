import React from "react";
import styled from "styled-components";

export interface TextButtonProps {
  title: string;
  fontFamily: string;
  fontSize: string;
  textColor: string;
  textWeight: number;
  [name: string]: any;
}

const TextButtonWrapper = styled.button<TextButtonProps>`
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  color: ${props => props.textColor};
  font-weight: ${props => props.textWeight};
  background-color: transparent;
  border-radius: 10px;
  outline: none;
  padding: 15px 30px;
  border: 0;
`;

const TextButtonTitle = styled.span`
  cursor: pointer;
  transition: 0.5s;
  :hover {
    opacity: 50%;
  }
`;

export const TextButton: React.FC<Partial<TextButtonProps>> = ({
  title = "Button",
  fontFamily = "Roboto, Arial, serif",
  fontSize = "18px",
  textColor = "#000000",
  textWeight = 400,
  ...props
}) => {
  return (
    <TextButtonWrapper
      textColor={textColor}
      fontFamily={fontFamily}
      fontSize={fontSize}
      textWeight={textWeight}
      {...props}
    >
      <TextButtonTitle>
        {title}
      </TextButtonTitle>
    </TextButtonWrapper>
  );
};
