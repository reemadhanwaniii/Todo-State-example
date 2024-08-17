import { useState } from "react";
import TodoItem from "./TodoItem"; 

function Todo(){

    const [text,setText] = useState("");
    const [todoItems,setTodoItems] = useState([{data:"todo1",id:123},{data:"todo2",id:321}])

   function deleteTodo(id){
     let remainingItems = todoItems.filter((todo) => todo.id !== id);
     setTodoItems(remainingItems);
   }
   
   function editTodo(id,newTodo){
        let updatedTodo = todoItems.map((todo)=>{
            if(todo.id === id){
                todo.data = newTodo
            }
            return todo;
        });
        setTodoItems(updatedTodo);
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
            {todoItems.map((todo)=><TodoItem 
                                        todo={todo} 
                                        key={todo.id} 
                                        delete={()=>deleteTodo(todo.id)} 
                                        edit={(newTodo)=>editTodo(todo.id,newTodo)}/>)}
        </ul>
    </>
      
   )
}

export default Todo;