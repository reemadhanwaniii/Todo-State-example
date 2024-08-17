import { useState } from "react";
import TodoItem from "./TodoItem"; 

function Todo(){

    const [text,setText] = useState("");
    const [todoItems,setTodoItems] = useState([{data:"todo1",id:123},{data:"todo2",id:321}])

   function deleteTodo(id){
     let remainingItems = todoItems.filter((todo) => todo.id !== id);
     setTodoItems(remainingItems);
   }

   return(
    <>
        <input 
                onChange={(e)=>setText(e.target.value)}
                type="text" 
                placeholder="new todo..."/>
                <br/>
        <button 
            onClick={()=>{setTodoItems([...todoItems,{data:text,id:(new Date().getTime())}])}}>
            Add Todo
        </button>
        <ul>
            {todoItems.map((todo)=><TodoItem todo={todo} key={todo.id} delete={()=>deleteTodo(todo.id)}/>)}
        </ul>
    </>
      
   )
}

export default Todo;