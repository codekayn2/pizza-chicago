import React from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";

const FullPizza: React.FC = () => {
  const navigate = useNavigate();
  const [pizza, setPizza] = React.useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
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
        navigate("/");
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <h2>Загрузка...</h2>;
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₴</h4>
    </div>
  );
};

export default FullPizza;
