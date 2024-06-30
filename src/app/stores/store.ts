import { create } from 'zustand';

interface StoreState {
  collapsed: boolean;
  toggleCollapsed: () => void;
}

const useStore = create<StoreState>((set) => ({
  collapsed: false,
  toggleCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),
}));

export default useStore;