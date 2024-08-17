import { useState } from "react";
import TodoList from "./TodoList";

function Todo() {
  
  const [text,setText] = useState("");
  const [todo,setTodo] = useState([]);
 
  return(
    <>
        <input onChange={(e)=>setText(e.target.value)} type="text" placeholder="new todo..."/><br/>
        <button onClick={()=>{setTodo([...todo,text])}}>Add Todo</button>
        <TodoList todos={todo}/>
    </>
  )
}

export default Todo;


/**
 * if we want to add new element in array what we do is use push method
 * arr = [1,2,3,4]
 * arr.push(5)
 * 
 * but in case of state we can't do like that because setTodo is function and it expects an array. so we destructure array and pass it to setTodo method
 */