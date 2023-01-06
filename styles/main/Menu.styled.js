import styled from "styled-components";

export const StyledMenu = styled.aside`
  background-color: ${({ theme }) => theme.colors.white};

  flex: 1;

  border-bottom-left-radius: 1.5rem;
  border-top-left-radius: 1.5rem;

  @media screen and (max-width: ${({ theme }) => theme.small_screen}) {
    display: none;
  }
`;

export const Nav = styled.nav`
  height: 100%;
  padding-top: 1rem;

  display: flex;
  flex-direction: column;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-left: 1rem;

  h1 {
    font-size: 1.5rem;
  }
`;

export const Content = styled.ul`
  list-style-type: none;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding-top: 2rem;

  li {
    font-size: 1.05rem;
    font-weight: 600;

    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 0.5rem 1.5rem;
    border-radius: 3rem;
    transition: background 0.5s ease-in-out, color 0.25s ease-in-out;

    svg {
      font-size: 1.75rem;
      opacity: 0.75;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.font_dark};
      color: white;
    }
  }
`;
