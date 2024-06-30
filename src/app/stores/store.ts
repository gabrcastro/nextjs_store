import { create } from 'zustand';

interface StoreState {
  collapsed: boolean;
  cartTotal: number;
  setCartTotal: (length: number) => void;
  toggleCollapsed: () => void;
}

const useStore = create<StoreState>((set) => ({
  collapsed: false,  
  toggleCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),
  cartTotal: 0,
  setCartTotal: (length) => set(() => ({cartTotal: length})),
}));

export default useStore;
