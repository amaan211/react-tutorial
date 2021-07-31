import React from 'react'


export default function ToDo({todo, onDelete}) {
    
    return (
        <div>
            <div class="card" >
                <div class="card-body">
                    <h5 class="card-title">{todo.title}</h5>
                    <p class="card-text">{todo.desc}</p>
                    <a href="#" class="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Done</a>
                </div>
            </div>
        </div>
        
    );
}
