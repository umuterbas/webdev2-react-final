import React from "react";
import "./MyRecipes.css";

const MyRecipes = ({ recipes, deletingRecipe }) => {
  return (
    <>
      <div className="all_div">
        <h2>My Recipes</h2>

        <ul>
          {recipes &&
            recipes.map((item, index) => {
              return (
                <>
                  <li className="recipes_list" key={index}>
                    <p>{item.title}</p>
                   <i onClick={() => deletingRecipe(item.id)} class="fa-solid fa-trash-can"></i>
                  </li>
                </>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default MyRecipes;
