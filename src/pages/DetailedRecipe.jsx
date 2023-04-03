import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const DetailedRecipe = () => {
  const [detailedRecipe, setDetailedRecipe] = useState([]);
  const [active, setActive] = useState("instructions");
  let params = useParams();
  const paramsRoute = params.name;

  useEffect(() => {
    fetchDetailedRecipe(paramsRoute);
  }, [paramsRoute]);

  const fetchDetailedRecipe = async (paramsRoute) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${paramsRoute}/information?apiKey=${process.env.REACT_APP_API_KEY2}`
    );
    const json = await data.json();
    setDetailedRecipe(json);
  };

  return (
    <DetailDiv>
      <div>
        <h2>{detailedRecipe.title}</h2>
        <img src={detailedRecipe.image} alt={detailedRecipe.title} />
      </div>
      <Info>
        <ButtonWrapper>
          <Button
            className={active === "instructions" ? "active" : ""}
            onClick={() => setActive("instructions")}
          >
            Intructions
          </Button>
          <Button
            className={active === "ingredients" ? "active" : ""}
            onClick={() => setActive("ingredients")}
          >
            Ingredients
          </Button>
        </ButtonWrapper>
        {active === "instructions" && (
          <div>
            <h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: detailedRecipe.instructions,
                }}
              ></p>
            </h3>
          </div>
        )}
        {active === "ingredients" && (
          <ul>
            {detailedRecipe.extendedIngredients.map((el) => (
              <li key={el.id}>{el.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailDiv>
  );
};

const DetailDiv = styled.div`
  margin-top: 10em;
  margin-bottom: 5em;
  display: flex;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2 {
    margin-bottom: 2em;
  }

  li {
    font-size: 1.2em;
    line-height: 2.5em;
  }

  ul {
    margin-top: 2em;
  }

  img {
    border-radius: 1em;
    width: 20em;
  }

  @media (max-width: 600px) {
    display: grid;
    place-content: center;
    gap: 4em;
    margin-top: 5em;

    h2 {
      text-align: center;
    }

    p {
      text-align: center;
      width: 200%;
      line-height: 1.6em;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  max-height: 3em;

  @media (max-width: 420px) {
    margin-top: 3em;
  }
`;

const Button = styled.button`
  padding: 1em 2em;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2em;
  font-weight: 600;
  cursor: pointer;
`;

const Info = styled.div`
  margin-left: 5em;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

export default DetailedRecipe;
