export interface CartSliceState {
    totalPrice: number;
    items: CartItemRedux[];
  }
  
  export type CartItemRedux = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    type: string;
    size: number;
    count: number;
  };