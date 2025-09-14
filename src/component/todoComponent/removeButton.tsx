// delete Todo Button
import { useTodoStore } from "../../store/todoStore";
export function RemoveButton({ index }: { index: number }) {
    const removeTodo = useTodoStore((state) => state.removeTodo);
    return (
        <button onClick={() => removeTodo(index)}>Delete</button>
    );
}