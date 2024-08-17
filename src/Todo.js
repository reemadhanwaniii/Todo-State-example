import { useState } from "react";
import TodoList from "./TodoList";

function Todo() {
  let todos = [{id:1,data: "todo1"},{id:2,data:"todo2"},{id:3,data:"todo3"}];
  const [text,setText] = useState("");

  /**
   * we add an input tag and button on click of Add todo it will add todo in array but this functionality will not work
   * beacuse todos is a normal array and it will not rerender when array changes so instead of local array we need to maintai state variable
   */


  return(
    <>
        <input onChange={(e)=>setText(e.target.value)}type="text" placeholder="new todo..."/><br/>
        <button onClick={()=>{todos.push(text)}}>Add Todo</button>
        <TodoList todos={todos}/>
    </>
  )
}

export default Todo;