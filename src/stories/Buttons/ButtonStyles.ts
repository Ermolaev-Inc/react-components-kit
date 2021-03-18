import styled from "styled-components";
import { FontStyle } from "../Interfaces";
import {
  ButtonRectStyles,
  ButtonRoundStyles,
  SVGIcon
} from "./Button";

export const ButtonWrapper = styled.button<FontStyle>`
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  color: ${props => props.textColor};
  font-weight: ${props => props.textWeight};
  border: 0;
  text-decoration: none;
  padding: 15px 30px;
  outline: none;
  background-color: transparent;
`;

export const ButtonRectWrapper = styled(ButtonWrapper)<ButtonRectStyles>`
  cursor: pointer;
  background-color: ${props => props.backgroundColor};
  border-radius: 10px;
  transition: 0.4s;
  :hover {
    box-shadow: 0 0 15px 5px ${props => props.backgroundColor};
  }
  :active {
    transition: 0.07s;
    box-shadow: none;
  }
`;

export const ButtonRoundWrapper = styled(ButtonRectWrapper)<ButtonRoundStyles>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 30px 30px;
  width: ${props => props.diameter};
  height: ${props => props.diameter};
`;

export const SVGWrapper = styled.img<Partial<SVGIcon>>`
  width: ${props => props.svgWidth};
  height: ${props => props.svgHeight};
`;
