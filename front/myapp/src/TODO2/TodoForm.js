import React from "react";
import "./todo.css"
export default function TododForm({newTodo}){
    const [value,setValue]=React.useState("");  

    // const handleKeyTyping=e=>{
        
    //     console.log(value)

    // }

    const handleTodoSubmit=e=>{
        alert({value})
        e.preventDefault();
        if(!value) return;
        newTodo(value);

        setValue("");
    }
    
    return(
        <form className="my-form" onSubmit={handleTodoSubmit}>
            <input className="txt" type="text" placeholder="Enter Todo" value={value} onChange={e=>setValue(e.target.value)}/>
            <input className="btn" type="submit" value="ADD TODO" />
            

        </form>


       

    )

}   