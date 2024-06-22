import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware'

export const useTheme = create(devtools(persist((set, get) => ({
  theme: 'light',
  setTheme: (newTheme) => {
    set({ todos: newTheme })
  },
  getTheme: () => set({
    todos: get().theme
  }),

}), { name: 'theme' })))

