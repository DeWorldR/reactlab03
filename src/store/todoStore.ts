import { create } from "zustand"; 
 
interface Todo { 
    message: string;
    addTodo: (msg: string) => void;
    todolise: string[];
    removeTodo: (index: number) => void;
    clearTodos: () => void;
}
export const useTodoStore = create<Todo>((set) => ({ 
    message: "",
    addTodo: (msg: string) => set((state) => ({ todolise: [...state.todolise, msg] })), 
    todolise: [],
    removeTodo: (index: number) => set((state) => ({ todolise: state.todolise.filter((_, i) => i !== index) })),
    clearTodos: () => set({ todolise: [] }),
}));