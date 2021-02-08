import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
}

const Title = styled.p`
  display: flex;
  justify-content: center;
  margin-top: 5%;
  color: #666666;
  font-weight: bold;
  font-size: 2rem;
`;

export const ComponentExample: React.FC<Props> = ({
  text
}) => {
  return (
    <Title>{text}</Title>
  );
};