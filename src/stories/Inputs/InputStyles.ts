import styled from "styled-components";
import { InputStyles } from "./Input";

const InputWrapper = styled.input<InputStyles>`
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.fontSize};
  color: ${props => props.textColor};
  font-weight: ${props => props.textWeight};
  padding-bottom: 5px;
  width: ${props => props.width};
  height: ${props => props.height};
  outline: none;
  ::placeholder {
    color: ${props => props.placeholderColor};
    font-weight: ${props => props.placeholderWeight};
  }
`;

export const InputOpenWrapper = styled(InputWrapper)<InputStyles>`
  border-bottom-width: 4px;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-bottom-color: ${props => props.borderColor};
  :focus {
    border-bottom-color: ${props => props.borderFocusColor};
    ::placeholder {
      color: transparent;
    }
  }
`;