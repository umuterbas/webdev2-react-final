import "./App.css";

import Recipespage from "./Components/RecipeCard/MidSection/Recipespage";

import Test from "./Backend/test";
import MyFridge from "./Components/MyFridgeList/MyFridge";


import { AuthContextProvider } from './Components/nav/AuthContext';
import Nav from "./Components/nav/Nav"
import {  BrowserRouter as Router,   Routes,   Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <AuthContextProvider>
        <Router>
          <Nav />
        </Router>
      </AuthContextProvider>

      <Recipespage />
      {/* <Test/> */}
      {/* <MyFridge /> */}
    </div>
  );
}

export default App;
