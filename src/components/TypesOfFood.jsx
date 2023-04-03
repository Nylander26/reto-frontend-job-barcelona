import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const TypesOfFood = () => {
  return (
    <List>
      <StyledNavLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italiana</h4>
      </StyledNavLink>
      <StyledNavLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>Americana</h4>
      </StyledNavLink>
      <StyledNavLink to={"/cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </StyledNavLink>
      <StyledNavLink to={"/cuisine/Japanese"}>
        <GiChopsticks />
        <h4>Japonesa</h4>
      </StyledNavLink>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2em 0rem;

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 1em;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
    margin-top: 0.5em;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }

    h4 {
      color: white;
    }
  }
`;

export default TypesOfFood;