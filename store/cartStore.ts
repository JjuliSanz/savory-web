import { create } from "zustand";

interface CartItem {
  id: string;
  title: string;
  imageSrc: string;
  price: number; // Precio unitario
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  decreaseQuantity: (id: string) => void;
}

export const calculateTotalPrice = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const calculateIndividualPrice = (price: number, quantity: number): number => {
  return price * quantity;
};

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id
      );
      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? {
                  ...cartItem,
                  quantity: cartItem.quantity + 1,
                }
              : cartItem
          ),
        };
      }
      return { cart: [...state.cart, { ...item, quantity: 1 }] };
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  decreaseQuantity: (id) =>
    set((state) => {
      const existingItem = state.cart.find((cartItem) => cartItem.id === id);
      if (existingItem && existingItem.quantity > 1) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === id
              ? {
                  ...cartItem,
                  quantity: cartItem.quantity - 1,
                }
              : cartItem
          ),
        };
      } else {
        return {
          cart: state.cart.filter((cartItem) => cartItem.id !== id),
        };
      }
    }),
}));

