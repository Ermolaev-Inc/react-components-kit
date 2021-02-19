import React from "react";
import styled from "styled-components";

export type ButtonTitle = {
  title: string;
};

export type ButtonStyles = {
  fontFamily?: string;
  fontSize?: string;
  textColor?: string;
  textWeight?: number;
  backgroundColor?: string;
}

export type UserProps = {
  [name: string]: any;
}

export interface ButtonThemesConfig {
  themeConfig: ButtonThemes;
  currentTheme: keyof ButtonThemes;
}

export type ButtonThemes = {
  [themeTitle: string]: ButtonStyles;
}

export type ButtonProps = ButtonTitle & ButtonStyles & UserProps & ButtonThemesConfig;

const ButtonWrapper = styled.button<ButtonStyles>`
  font-family: ${props => props.fontFamily};
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
  title = "OK",
  fontFamily = "Roboto, Arial, serif",
  fontSize = "18px",
  textColor = "#ffffff",
  textWeight = 400,
  backgroundColor = "#79c7ff",
  currentTheme,
  themeConfig,
  ...props
}) => {
  if (!themeConfig || !currentTheme || !themeConfig[currentTheme]) {
    themeConfig = {
      NOTHEME: {
        fontFamily: fontFamily,
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
