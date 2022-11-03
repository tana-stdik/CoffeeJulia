import React, { useState, useEffect } from "react";
import CoffeeInfo from "./CoffeeInfo";
import "./styles.css";

export default function CoffeeList(_props) {
  const [coffeeList, setCoffeeList] = useState([]);

  useEffect(() => {
    console.log(coffeeList);
  }, [coffeeList]);

  const urlCoffee = "https://api.sampleapis.com/coffee/hot/";

  function addCoffee() {
    async function fetchRandomCoffee() {
      const randomCoffeeUrl =
        urlCoffee + String(Math.floor(Math.random() * 20));
      let response = await fetch(randomCoffeeUrl);
      let parsedResponse = await response.json();

      setCoffeeList([...coffeeList, parsedResponse]);
    }

    fetchRandomCoffee();
  }

  function removeCoffee() {
    console.log("Clicked remove!");
    coffeeList.pop();
    setCoffeeList([...coffeeList]); // talk why spreading is important (because it creates a new array which is not equal to the old one)
  }

  function renderCoffee(_props) {
    return coffeeList.map((eachCoffee) => {
      return (
        <CoffeeInfo
          title={eachCoffee.title}
          description={eachCoffee.description}
          image={eachCoffee.image}
          ingredients={eachCoffee.ingredients}
        />
      );
    });
  }

  return (
    <div className="coffeeList">
      <h2>Coffee List</h2>
      {renderCoffee()}
      <button className="button-30" onClick={addCoffee}>
        Add Coffee
      </button>
      <button
        className="button-30"
        onClick={removeCoffee}
        style={{ color: "red" }}
      >
        Remove Coffee
      </button>
    </div>
  );
}
