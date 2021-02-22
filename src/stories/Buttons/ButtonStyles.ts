import styled from "styled-components";
import { ButtonRectProps, ButtonRoundProps } from "./Button";

export const ButtonRectWrapper = styled.button<ButtonRectProps>`
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  background-color: ${props => props.backgroundColor};
  border: 0;
  color: ${props => props.textColor};
  font-weight: ${props => props.textWeight};
  border-radius: 10px;
  text-decoration: none;
  transition: 0.4s;
  padding: 15px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  :hover {
    box-shadow: 0 0 15px 5px ${props => props.backgroundColor};
  }
  :active {
    transition: 0.07s;
    box-shadow: none;
  }
`;

export const ButtonRoundWrapper = styled(ButtonRectWrapper)<ButtonRoundProps>`
  border-radius: 50%;
  padding: 30px 30px;
  width: ${props => props.diameter};
  height: ${props => props.diameter};
`;