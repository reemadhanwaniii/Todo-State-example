function TodoList ({todos}) {
    return(
        <ul>{todos.map((todo)=><li key={todo.id}>{todo.data}</li>)}</ul>
    )
}

export default TodoList;