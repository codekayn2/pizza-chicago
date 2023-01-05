import React from "react";
import { useParams } from "react-router";
import axios from "axios";

const FullPizza = () => {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://63a632a2318b23efa7a5c07c.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Ошибка при запросі піци");
        console.log("ERROR", error);
      }
    }
    fetchPizza();
  }, []);

  if(!pizza) {
    return <h2>Загрузка...</h2>
  }

  return (
    <div>
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias atque
        saepe culpa, magnam fugit officiis, quas necessitatibus beatae
        reiciendis, ad a aspernatur inventore dicta modi iure provident quos.
        Iste, repellat.
      </p>
      <h4>{pizza.price} ₴</h4>
    </div>
  );
};

export default FullPizza;
