import styled from "styled-components";

export const ModalContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;

  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const StyledModal = styled.div`
  width: 35rem;
  height: 30rem;
  border-radius: 0.75rem;
  background-color: #fff;
  box-shadow: 0.5em 0.5em 2em rgba(0, 0, 0, 0.1),
    0.125em 0.125em 05em rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 100;

  form {
    height: 100%;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      label {
        flex: 1;
        text-align: right;
      }

      input,
      textarea {
        flex: 2;
        font-family: inherit;
      }

      &:last-child {
        margin-top: 1rem;
      }
    }

    span {
      color: red;
      font-weight: 600;
      text-align: center;
    }
  }
`;
