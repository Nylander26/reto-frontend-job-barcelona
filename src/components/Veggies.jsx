import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Veggies = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    veggetarianRecipes();
  }, []);

  const veggetarianRecipes = async () => {
    const checkLocalStorage = localStorage.getItem("veggetarian");

    if (checkLocalStorage) {
      setData(JSON.parse(checkLocalStorage));
    } else {
      const fetchVeggies = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const json = await fetchVeggies.json();
      console.log(json);
      localStorage.setItem("veggetarian", JSON.stringify(json.recipes));
      setData(json.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3>Recetas Vegetarianas</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: true,
            pagination: false,
            gap: "5rem",
          }}
        >
          {data.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 12rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 100;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 0.8rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
`;

export default Veggies;
