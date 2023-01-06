import { useEffect } from "react";
import { StyledMain } from "../../styles/main/Main.styled";
import Calendar from "./Calendar";
import Menu from "./Menu";
import { useDispatch, useSelector } from "react-redux";
import { getAllCommits } from "../../context/commits/commitsSlice";
import Modal from "../modal/Modal";

const Main = ({ commits }) => {
  const { isShown } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  const modalStyle = {
    display: !isShown ? "none" : "flex",
  };

  useEffect(() => {
    dispatch(getAllCommits({ commits }));
  }, []);

  return (
    <StyledMain>
      <Menu />
      <Calendar />
      <Modal style={modalStyle} />
    </StyledMain>
  );
};

export default Main;
