import { useState } from "react";
import {
  StyledModal,
  StyledOverlay,
  ModalContainer,
} from "../../styles/modal/Modal.styled";
import { Button } from "../../styles/shared/Button.styled";
import { useDispatch } from "react-redux";
import { hideModal } from "../../context/modal/modalSlice";
import uuid from "react-uuid";
import { addNewCommit } from "../../context/commits/commitsSlice";

const initialState = {
  username: "",
  name: "",
  email: "",
  date: "",
  image_url: "",
  profile_url: "",
  message: "",
};

function checkValidity(data) {
  let isValid = true;
  for (const key in data) {
    if (data[key].trim().length === 0) {
      isValid = false;
    }
  }
  return isValid;
}

const Modal = ({ style }) => {
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const [formData, setFormData] = useState(initialState);
  const { username, name, email, date, image_url, profile_url, message } =
    formData;

  const inputChangedHandler = (event) => {
    setFormData((prevstate) => {
      return {
        ...prevstate,
        [event.target.name]: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const isValid = checkValidity(formData);

    if (isValid) {
      const id = uuid();
      dispatch(addNewCommit({ commit: { ...formData, id } }));

      dispatch(hideModal());
      setFormData(initialState);
      setError("");
    } else {
      setError("All fields are required!");
    }
  };

  return (
    <ModalContainer style={style}>
      <StyledOverlay
        onClick={() => {
          dispatch(hideModal());
        }}
      />

      <StyledModal>
        <form onSubmit={submitHandler}>
          <h2>Post a Commit</h2>

          <div>
            <label htmlFor="username">Username : </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              placeholder="Username..."
              onChange={inputChangedHandler}
            />
          </div>

          <div>
            <label htmlFor="name">Full Name : </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              placeholder="Full name..."
              onChange={inputChangedHandler}
            />
          </div>

          <div>
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Email..."
              onChange={inputChangedHandler}
            />
          </div>

          <div>
            <label htmlFor="date">Date : </label>
            <input
              type="datetime-local"
              id="date"
              name="date"
              value={date}
              onChange={inputChangedHandler}
            />
          </div>

          <div>
            <label htmlFor="image">Image URL :</label>
            <input
              type="text"
              id="image"
              name="image_url"
              value={image_url}
              placeholder="Image URL..."
              onChange={inputChangedHandler}
            />
          </div>

          <div>
            <label htmlFor="profile">Profile URL :</label>
            <input
              type="text"
              id="image"
              name="profile_url"
              value={profile_url}
              placeholder="Profile URL..."
              onChange={inputChangedHandler}
            />
          </div>

          <div>
            <label htmlFor="message">Commit Message :</label>
            <textarea
              htmlFor="message"
              rows="4"
              name="message"
              value={message}
              placeholder="Commit message..."
              onChange={inputChangedHandler}
            ></textarea>
          </div>

          <span>{error}</span>

          <div>
            <Button>ADD</Button>
            <Button
              type="button"
              isAlternate={true}
              onClick={() => {
                dispatch(hideModal());
              }}
            >
              CANCEL
            </Button>
          </div>
        </form>
      </StyledModal>
    </ModalContainer>
  );
};

export default Modal;
