import React, { useEffect, useState } from "react";
import axios from "axios";

const Recipespage = () => {
  const [cards, setCards] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  const getData = () => {
    axios
      .get(
        "https://api.spoonacular.com/recipes/complexSearch?query=&apiKey=fa8a9d46ee714e2bbd0da09419e280e6"
      )
      .then(function (response) {
        // handle success
        console.log(response.data.results);
        setCards(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
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
              <div key={index}>
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
  );
};

export default Recipespage;
