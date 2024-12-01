export interface Cart {
  items: CartItems;
  total: number;
}

export interface CartItems {
  [key: string]: CartObject;
}

export interface CartObject {
  id: number;
  name: string;
  price: number;
  slashedPrice?: number;
  quantity: number;
}
