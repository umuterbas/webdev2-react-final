import fakeData from "./fakeData";
import React, { useEffect, useState } from "react";
// import axios from "axios";
import "./Recipespage.css";
// import { MidPart } from "./Recipespage.styled";

const Recipespage = () => {
  const [cards, setCards] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  const getData = () => {
    setCards(fakeData)
    // axios
    //   .get(
    //     "https://api.spoonacular.com/recipes/complexSearch?query=&number=50&apiKey=fa8a9d46ee714e2bbd0da09419e280e6"
    //   )
    //   .then(function (response) {
    //     // handle success
    //     console.log(response.data.results);
    //     console.log(response.data);
    //     setCards(response.data.results);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // always executed
    //   });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleCheckbox = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
    <div>
      <div>
        <input
          type="text"
          placeholder="Search.."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div>
        <input
          onChange={handleCheckbox}
          type="checkbox"
          id="1"
          name="1"
          value="1"
        />
        <label for="1"> 1</label>
        <input
          onChange={handleCheckbox}
          type="checkbox"
          id="2"
          name="2"
          value="2"
        />
        <label for="2"> 2</label>
        <input
          onChange={handleCheckbox}
          type="checkbox"
          id="3"
          name="3"
          value="3"
        />
        <label for="3"> 3</label>
        <input
          onChange={handleCheckbox}
          type="checkbox"
          id="4"
          name="4"
          value="4"
        />
        <label for="4"> 4</label>
      </div>
      <div className="cards">
      {cards &&
        cards
          .filter((item) => {
            if (searchTerm === "") {
              return item;
            } else if (
              item.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return item;
            }
          })
          .map((item, index) => {
            return (
              <div key={index} className="card">
                <p>{item.title}</p>
                <img src={item.image} alt="" />
                <div>
                  <button>More</button>
                  <button>Add</button>
                </div>
                </div>
              
            );
          })}
          </div>
    </div>
    </>
  );
};

export default Recipespage;
