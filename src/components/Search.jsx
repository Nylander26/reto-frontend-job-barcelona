import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

const Search = () => {
  const [data, setData] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + data)
    setData("");
  }

  return (
    <StyledForm onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input onChange={(e) => setData(e.target.value)} type="text" value={data} placeholder="Busca tu receta..."/>
      </div>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  margin: 0rem;
  position: relative;
  width: 50%;

  div {
    width: 100%;
    position: relative;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.2em;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    right: 10%;
    transform: translate(100%, -50%);
    color: white;
    font-size: 1.2em
  }
`;

export default Search;
