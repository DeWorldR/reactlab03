// show Todo list Component
import { useTodoStore } from "../../store/todoStore";
import { RemoveButton } from "./removeButton"; 
export function ShowTodoList() {
    const todolise = useTodoStore((state) => state.todolise);
    const clearTodos = useTodoStore((state) => state.clearTodos);
    return (
        <>
            <h2>Todo List</h2>  
            <ul>
                {todolise.map((todo, index) => (
                    <li key={index}>
                        {todo} <RemoveButton index={index} />
                    </li>
                ))} 
            </ul>
            <button onClick={clearTodos}>Clear All</button>
        </>
    );
}