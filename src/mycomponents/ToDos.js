import React from 'react'
import ToDo from './ToDo'

export default function ToDos({todos, onDelete}) {
    const mystyle={
        minHeight:"65vh",
        margin:"10px 0"
    }
    return (
        <div style={mystyle}>
            <h3 className="text-center"><u>ToDos List</u></h3>
            {todos.length==0 ? <h1>no todos</h1> : 
            todos.map((todo)=>{
                return <ToDo todo={todo} key={todo.sno} onDelete={onDelete} />;
                
            })}
            
        </div>
    )
}
