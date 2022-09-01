import "./App.css";

import Recipespage from "./Recipespage";

import Test from "./Backend/test";
import MyFridge from "./Components/MyFridgeList/MyFridge";

function App() {
  return (
    <div className="App">
      // <Recipespage />
      {/* <Test/> */}
      <MyFridge />
    </div>
  );
}

export default App;
