import { useState } from "react";

function TodoItem(props) {
  const [isFinished,setIsFinished] = useState(false);
  return(
    <>
      <li>{props.todo.data}</li>
      <button onClick={()=>{
        setIsFinished(!isFinished);
        props.delete();
      }}>{isFinished?'Redo':'Done'}</button>
    </>
   
  )
}

export default TodoItem;


/**
 * passing information from child to parent -> one way is callback 
 * example : delete functionality
 */