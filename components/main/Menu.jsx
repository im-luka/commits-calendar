import { StyledMenu, Nav, Logo, Content } from "../../styles/main/Menu.styled";
import { Button } from "../../styles/shared/Button.styled";
import Image from "next/image";
import {
  FaHome,
  FaFile,
  FaTasks,
  FaCalendarAlt,
  FaTeamspeak,
  FaEnvelope,
  FaBusinessTime,
} from "react-icons/fa";

const Menu = () => {
  return (
    <StyledMenu>
      <Nav>
        <Logo>
          <Image src="/favicon.ico" width="60" height="60" alt="logo" />
          <h1>calendar</h1>
        </Logo>

        <Content>
          <li>
            <FaHome /> Home
          </li>
          <li>
            <FaFile /> Projects
          </li>
          <li>
            <FaTasks /> Tasks
          </li>
          <li>
            <FaCalendarAlt /> Calendar
          </li>
          <li>
            <FaTeamspeak /> Teams
          </li>
          <li>
            <FaEnvelope /> Messages
          </li>
          <li>
            <FaBusinessTime /> Activity
          </li>
        </Content>

        <Button margin="auto">Log Out</Button>
      </Nav>
    </StyledMenu>
  );
};

export default Menu;
