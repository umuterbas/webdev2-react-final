import "./App.css";
import MyRecipes from "./Components/RecipeCard/MyRecipesBar(RightSection)/MyRecipes";
import Recipespage from "./Components/RecipeCard/MidSection/Recipespage";

import Test from "./Backend/test";
import MyFridge from "./Components/MyFridgeList/MyFridge";

function App() {
  return (
    <div className="App">
      <Recipespage />
      {/* <MyRecipes /> */}
      {/* <Test/> */}
      {/* <MyFridge /> */}
    </div>
  );
}

export default App;
