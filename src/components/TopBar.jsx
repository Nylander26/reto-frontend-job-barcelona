import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import Search from "./Search";

const TopBar = () => {
  return (
    <>
      <Nav>
        <div>
          <Logo>
            <GiKnifeFork to={"/"} />
          </Logo>
          <Logo to={"/"}>FoodieU</Logo>
        </div>
        <Search />
      </Nav>
    </>
  );
};

const Logo = styled(Link)`
  font-size: 1.5em;
  font-weight: 400;
  font-family: Roboto;
  text-decoration: none;
`;

const Nav = styled.div`
  padding: 2em 0em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  svg {
    font-size: 2em;
  }
`;

export default TopBar;
