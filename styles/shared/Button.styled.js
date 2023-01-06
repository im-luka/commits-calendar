import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5rem 3rem;
  border: 0;
  border-radius: 2rem;

  background-color: ${({ theme, isAlternate }) =>
    !isAlternate ? theme.colors.blue : "red"};
  color: #fff;
  box-shadow: 0.2rem 0.2rem 0.12rem rgb(0, 0, 0, 0.35);

  margin: ${({ margin }) => margin || 0};
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
