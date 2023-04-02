import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const Searched = () => {
  const [searched, setSearched] = useState([]);
  let params = useParams();

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  const getSearched = async (meal) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY2}&query=${meal}&number=20`
    );
    const json = await data.json();
    setSearched(json.results);
  };

  return (
    <Grid>
      {searched.map((el) => {
        return (
          <Card key={el.id}>
            <Link to={'/recipe/' + el.id}>
            <img src={el.image} alt={el.title} />
            <h3>{el.title}</h3>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
};

  const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;

  @media (max-width: 420px) { 
    grid-template-columns: repeat(1, 1fr);
    margin-top: 5em;
  }
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Searched;