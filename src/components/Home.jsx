import { useState } from "react";
import ModalForm from "./ModalForm.jsx";
import TodoList from "./TodoList.jsx";

const Home = () => {
  /* 
    todos -> All Todo List
    isModalOpen
    editingTodo
  */

  // ****** STEP 2 ******
  // Declare the States
  const [todos, setTodos] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingTodo, setEditingTodo] = useState(null)
  // ****** END of STEP 2 ******

  // console.log(todos)

  // ****** STEP 4 ******
  const openAdd = () => {
    setEditingTodo(null);
    setIsModalOpen(true);
  }
  // ****** END of STEP 4 ******

  // ****** STEP 13 ******
  // Handle the Todo ADDING
  const handleAddTodo = title => {
    const newTodo = {
      id: crypto.randomUUID(),
      // title: title,
      // ShortHand Property
      title,
      createdAt: Date.now(),  // not necessary for this project
    }
    // [].push(newTodo)
    /* 
    setCount(count + 1)
    setCount(prevValue => prevValue + 1)
    */
    /* setTodos([
      ...todos,
      newTodo
    ]) */
    setTodos(prevTodos => [
      ...prevTodos,
      newTodo
    ]);
    // Close the Modal
    setIsModalOpen(false);
  }
  // ****** END of STEP 13 ******

  // ****** STEP 15 ******
  const openEdit = todo => {
    setEditingTodo(todo);
    setIsModalOpen(true);
  }

  const handleEditTodo = title => {
    setTodos(prevTodos => prevTodos.map(todo =>
      todo.id === editingTodo.id ? { ...todo, title } : todo
    ))
    setEditingTodo(null);
    setIsModalOpen(false);
  }
  // ****** END of STEP 15 ******

  // ****** STEP 20 ******
  const handleDeleteTodo = todo => {
    const isConfirmed = window.confirm('Are you sure you wanna delete this todo item?');
    if(isConfirmed) {
      setTodos(prevTodos => prevTodos.filter(
        t => t.id !== todo.id
      ))
    }
  }
  // ****** END of STEP 20 ******

  // ****** STEP 14 ******
  const handleFormSubmit = title => {
    editingTodo
    ?
    handleEditTodo(title)
    :
    handleAddTodo(title)
  }  
  // ****** END of STEP 14 ******

  /* 
    Null Coalescing Operator (Check in src/null-coalescing.js file)
  */

  return (
    // ****** STEP 1 ******
    <div className="flex flex-col items-center justify-center bg-[#fbfbfb]">
      <div className="max-w-3xl mx-auto">
        {/* Title & Submit Button */}
        <h1 className="text-3xl font-bold text-center">
          Todo Application
        </h1>
        <button
          onClick={openAdd} // ****** STEP 3 ******
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 my-5 rounded-xl"
        >
          Add a Todo
        </button>
      </div>
      {/* END of ****** STEP 1 ****** */}

      {/* Create A Modal Component & Finally Call Here */}
      {/* STEP 5 -> Create ModalForm Component */}
      {/* STEP 12 -> eikhane eita boshao */}
      <ModalForm
        // initialTitle={jodi add -> '', jodi edit -> ager title}
        initialTitle={editingTodo?.title ?? ''} // ?? -> Null Coalescing Operator (null ba undefined)
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onFormSubmit={handleFormSubmit}
      />

      {/* STEP 16 -> Create TodoList Component */}
      {/* STEP 17 Call TodoList Here */}
      <TodoList
        todos={todos}
        onEdit={openEdit}
        onDelete={handleDeleteTodo}
      />
    </div>
  )
}

export default Home;