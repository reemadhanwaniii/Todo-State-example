import TodoList from "./TodoList";

function Todo() {
  let todos = [{id:1,data: "todo1"},{id:2,data:"todo2"},{id:3,data:"todo3"}];
  return(
    <>
        <TodoList todos={todos}/>
    </>
  )
}

export default Todo;