import styled, { css } from "styled-components";

export const StyledCalendar = styled.main`
  flex: 5;

  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledSwitcher = styled.section`
  width: 90%;
  margin-top: 2rem;
  padding-inline: 1rem;
  border-radius: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

export const StyledPicker = styled.div`
  width: 18rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  font-size: 1.15rem;

  svg {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const StyledDates = styled.main`
  width: 95%;
  margin: 2rem;
`;

export const StyledDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 0.25rem 1rem;
  border-radius: 1rem;
  background-color: #fff;
  text-align: center;
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 1px;
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;

  margin-top: 2rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: white;
`;

export const StyledDateItem = styled.div`
  height: 100px;
  width: 100%;
  background-color: ${({ isThisMonth }) => (isThisMonth ? "#fff" : "#4b5777")};
  border: 1px solid ${({ theme }) => theme.colors.font_light};
  border-radius: 0.75rem;
  text-align: center;
  overflow: hidden;

  cursor: pointer;
  transition: background-color 0.35s ease-in;

  ${({ isEmpty, isThisMonth }) =>
    !isEmpty &&
    isThisMonth &&
    css`
      &:hover,
      &:hover div {
        background-color: #0062fe;
        color: #fff;
      }
    `}

  div {
    background-color: lightgray;

    height: 100%;
    margin-inline: 0.2rem;
    border-radius: 1rem;

    transition: background-color 0.35s ease-in;

    p:first-child {
      text-align: left;
      margin-left: 0.75rem;
    }
  }
`;
