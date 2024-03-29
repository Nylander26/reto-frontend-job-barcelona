import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "@splidejs/splide/dist/css/splide.min.css";

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
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=vegetarian&number=9`
      );
      const json = await fetchVeggies.json();
      localStorage.setItem("veggetarian", JSON.stringify(json.recipes));
      setData(json.recipes);
    }
  };

  const changeVegetarianRecipes = async () => {
    const fetchAPIAgain = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
    );
    const json = await fetchAPIAgain.json();
    localStorage.setItem("random", JSON.stringify(json.recipes));
    setData(json.recipes);
  };

  return (
    <div>
      <Wrapper>
        <Title>
          <h3>Recetas Veganas Aleatorias</h3>
          <Button onClick={() => changeVegetarianRecipes()}>
            Nuevas Recetas
          </Button>
        </Title>
        <Splide
          options={{
            perPage: 3,
            arrows: true,
            pagination: false,
            gap: "5rem",
            rewind: true,
            breakpoints: {
              1024: {
                perPage: 3,
               
              },
              768: {
                perPage: 2,
            
              },
              640: {
                perPage: 1,
          
              },
            },
          }}
        >
          {data.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={!recipe.image ? './logofoodie.png' : recipe.image} alt={recipe.title} />
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
  margin: 4em 0em;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background: linear-gradient(35deg, #494949, #313131);
  border: none;
  border-radius: 20%;
  font-size: 1em;
  color: white;
  line-height: 1.5em;
  margin: 2em 0em;
  cursor: pointer;
  padding: 0.5em;

  :hover {
    background: linear-gradient(to right, #f27121, #e94057);
    color: white;
  }
`;

const Card = styled.div`
  min-height: 12em;
  border-radius: 2em;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2em;
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
    font-size: 0.8em;
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
