import React from "react"
import TodoList from "./TodoList";
import TodoForm from "./TodoForm"
import "./todo.css";

export default function TodoContainer(){
    const[todos,setTodos]=React.useState([
        {
            text:"my default todo",
            isCompleted:""
        }
    ]);

    

    // here we r adding  new todo in todos array
    const newTodo=text=>{
        debugger
        const newTodos=[...todos,{text}];
        setTodos(newTodos)
        
        

    }
    // here we r deleting todo at index index
    const deleteItem=index=>{
        debugger
        const newTodos=[...todos];
        newTodos.splice(index,1)
        setTodos(newTodos)
        

    }
    // mark completed todos
    const CompletedTodo=index=>{
        const newTodos=[...todos];
        newTodos[index].isCompleted="True";
        setTodos(newTodos)


    }
    return(
        <div className="app">
            <div className="header">
                <h1>MY TODO APP</h1>
            </div>
            <TodoForm newTodo={newTodo} />
            <div className="my-todo-list">
                {
                todos.map((todo,index)=>(
                    <div className="todo-item">
                        <TodoList key={index}  index={index} todo={todo} deleteItem={deleteItem} CompletedTodo={CompletedTodo}/>
                    </div>


                )
                )}
            </div>
        </div>
    )
   
}
