import React from "react";

import "./scss/app.scss";

import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Sort from "./components/Sort/Sort";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";

const App = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://63a632a2318b23efa7a5c07c.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItems(data);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Всі піци</h2>
          <div className="content__items">
            {items.map((obj) => (
              <PizzaBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
