import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
// STEP 18
const TodoItem = ({ todo, onEdit, onDelete }) => {
  return (
    <div className="todoItem flex items-center justify-between p-3 rounded mb-2">
      <p>
        {todo.title}
      </p>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onEdit(todo)}
          className="px-2 py-1 rounded hover:bg-blue-100"
        >
          <MdModeEdit className="text-blue-500" />
        </button>
        <button
          onClick={() => onDelete(todo)}  // STEP 19
          className="px-2 py-1 rounded hover:bg-blue-100"
        >
          <MdDelete className="text-red-500" />
        </button>
      </div>
    </div>
  )
}

export default TodoItem;