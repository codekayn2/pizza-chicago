import React, { useState } from "react";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = ["Все", "Мясні", "Вегетерянські", "Гриль", "Закриті"];



  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
          key={i}
            onClick={() =>  setActiveIndex(i)}
            className={activeIndex === i ? "active" : ""}
          >
            {value}
          </li>
        ))} 
      </ul>
    </div>
  );
};

export default Categories;
