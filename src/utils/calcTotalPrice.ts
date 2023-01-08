import { CartItemRedux } from "../redux/cart/types";

export const calcTotalPrice = (items: CartItemRedux[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
