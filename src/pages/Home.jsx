import React, { useState } from "react";
import FoodCard from "../components/foodCard";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";

const Home = (props) => {
  const APP_ID = "59a300c0";
  const APPLICATION_ID = "f3d786a4e34eb4834bc0efb5d7a44af4";
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate("");
  const fetchRecipes = async () => {
    const getRecipes = await axios.get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${APP_ID}&app_key=${APPLICATION_ID}`
    );
    const recipeData = getRecipes.data.hits;
    setRecipes(recipeData);
    console.log("Recipes", recipes);
  };
  useEffect(() => {
    if (!props.status) {
      navigate("/");
    }
    fetchRecipes();
  }, []);
  return (
    <>
      <div className="flex bg-slate-400  ">
        <div className="flex p-4 gap-3 ml-auto mr-auto w-2/3">
          <input
            type="text"
            value="Search"
            className="focus:outline-none p-2 w-full"
          />
          <button className="border-black border-2 rounded-md p-2">
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {recipes.map((data, index) => {
          return (
            <FoodCard
              title={data.recipe.label}
              calories={data.recipe.calories}
              image={data.recipe.image}
              ingredients={data.recipe.ingredients}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
