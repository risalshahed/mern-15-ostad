import TodoItem from "./TodoItem.jsx"
// STEP 16.1
const TodoList = ({ todos, onEdit, onDelete }) => {
  if(todos.length === 0) {
    return <p>No Todos, Add One</p>
  }
  // else
  return (
    <div>
      {
        todos?.map(todo =>
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        )
      }
    </div>
  )
}

export default TodoList;