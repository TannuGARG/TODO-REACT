import React from "react";
import "./todo.css"
export default function TodoList({todo,index,deleteItem,CompletedTodo}){
   
    return(
        <div className={(todo.isCompleted?"done" :"")}>
            <div className="reduce">
            <label>{todo.text}</label>
        <button className="delete-todo" onClick={()=>deleteItem(index)}>DELETE TODO</button>
        <button className="completed-todo" onClick={()=>CompletedTodo(index)}>COMPLETED</button>
        </div>
        </div>
        
    )
}