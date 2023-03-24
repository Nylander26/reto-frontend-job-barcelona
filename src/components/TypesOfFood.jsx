import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const TypesOfFood = () => {
  return (
      <List>
        <StyledNavLink to={'/cuisine/Italian'}>
          <FaPizzaSlice />
          <h4>Italian</h4>
        </StyledNavLink>
        <StyledNavLink to={'/cuisine/American'}>
          <FaHamburger />
          <h4>American</h4>
        </StyledNavLink>
        <StyledNavLink to={'/cuisine/Thai'}> 
          <GiNoodles />
          <h4>Thai</h4>
        </StyledNavLink>
        <StyledNavLink to={'/cuisine/Japanese'}>
          <GiChopsticks />
          <h4>Japanese</h4>
        </StyledNavLink>
      </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(.8);

  h4 {
    color: white;
    font-size: .8rem;
  }

  svg{
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
`

export default TypesOfFood;
