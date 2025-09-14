import { useState } from "react";
import { useTodoStore } from "../../store/todoStore";

export function TodoForm() {
    const [input, setInput] = useState("");
    const addTodo = useTodoStore((state) => state.addTodo);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim() === "") return;
        addTodo(input);
        setInput("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add new todo"
            />
            <button type="submit">Add</button>
        </form>
    );
}