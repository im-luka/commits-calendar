import styled from "styled-components";

export const StyledContainer = styled.main`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  color: #fff;
  background: rgb(15, 45, 93);
  background: linear-gradient(
    120deg,
    rgba(15, 45, 93, 1) 0%,
    rgba(19, 19, 92, 1) 31%,
    rgba(0, 0, 0, 1) 100%
  );
  border-radius: 1.5rem;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyledImage = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  img {
    width: 25rem;

    border-radius: 50%;
    box-shadow: 0.5em 0.5em 2em rgba(0, 0, 0, 0.5),
      0.125em 0.125em 05em rgba(0, 0, 0, 0.5);
  }
`;

export const StyledInfo = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  padding: 1rem;

  header {
    display: flex;
    justify-content: space-around;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
`;
