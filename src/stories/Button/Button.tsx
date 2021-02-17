import React from "react";
import styled from "styled-components";

export interface ButtonThemeConfig {
  [themeTitle: string]: Partial<ButtonProps>;
}

export interface ButtonProps {
  themeConfig: ButtonThemeConfig;
  currentTheme: keyof Omit<ButtonThemeConfig, "currentTheme">;
  title: string;
  fontSize: string;
  textColor: string;
  textWeight: number;
  backgroundColor: string;
  [name: string]: any;
}

const ButtonWrapper = styled.button<Partial<ButtonProps>>`
  font-family: Roboto;
  font-size: ${props => props.fontSize};
  background-color: ${props => props.backgroundColor};
  border: 0;
  color: ${props => props.textColor};
  font-weight: ${props => props.textWeight};
  border-radius: 10px;
  text-decoration: none;
  transition: 0.2s;
  padding: 15px 30px;
  cursor: pointer;
  outline: none;
  :hover {
    box-shadow: 0 0 20px ${props => props.backgroundColor}, 0 0 10px ${props => props.backgroundColor}, 0 0 50px ${props => props.backgroundColor};
  }
  :active {
    transition: 0.07s;
    box-shadow: none;
  }
`;

export const Button: React.FC<Partial<ButtonProps>> = ({
  themeConfig,
  currentTheme,
  title = "OK",
  fontSize = "18px",
  textColor = "#ffffff",
  textWeight = 400,
  backgroundColor = "#79c7ff",
  ...props
}) => {
  if (themeConfig) {
    themeConfig["NOTHEME"] = {
      fontSize: fontSize,
      textColor: textColor,
      textWeight: textWeight,
      backgroundColor: backgroundColor,
    };
  }
  if (!themeConfig) {
    themeConfig = {
      NOTHEME: {
        fontSize: fontSize,
        textColor: textColor,
        textWeight: textWeight,
        backgroundColor: backgroundColor,
      }
    };
  }

  return (
    <ButtonWrapper
      {...themeConfig[currentTheme ? currentTheme : "NOTHEME"]}
      {...props}
    >
      {title}
    </ButtonWrapper>
  );
};
