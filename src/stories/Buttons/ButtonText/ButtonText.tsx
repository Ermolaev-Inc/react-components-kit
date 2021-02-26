import React from "react";
import styled from "styled-components";

import { ButtonProps } from "../Button";
import { ButtonWrapper } from "../ButtonStyles";

const TextButtonTitle = styled.span`
  cursor: pointer;
  transition: 0.5s;
  :hover {
    opacity: 50%;
  }
`;

export const ButtonText: React.FC<Partial<ButtonProps>> = ({
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
        {title}
      </TextButtonTitle>
    </ButtonWrapper>
  );
};
