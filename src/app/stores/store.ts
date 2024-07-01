import { create } from "zustand";

interface StoreState {
  collapsed: boolean;
  cartTotal: number;
  setCartTotal: (length: number) => void;
  toggleCollapsed: () => void;
  totalPrice: number;
  setTotalPrice: (total: number) => void;
  showModal: boolean;
  toggleModal: (state: boolean) => void;
}

const useStore = create<StoreState>((set) => ({
  collapsed: false,
  toggleCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),
  cartTotal: 0,
  setCartTotal: (length) => set(() => ({ cartTotal: length })),
  totalPrice: 0,
  setTotalPrice: (total) => set(() => ({ totalPrice: total })),
  showModal: false,
  toggleModal: (state) => set(() => ({ showModal: state })),
}));

export default useStore;
