import React from 'react'
import '../css/AddToDo.css'
import { useState } from 'react'

export default function AddTodo(props) {
    const [Title, setTitle] = useState("")
    const [Desc, setDesc] = useState("")
    const submit = (e) =>{
        e.preventDefault();
        if(!Title || !Desc){
            alert("you have to fill both fields")
        }
        else{
            props.addTodo(Title,Desc)
        }
    }
    return (
        <div className="container">
            <h3 className='text-center font-weight-bold'><u>Add a ToDo</u></h3>
            <form onSubmit={submit}>
                <div class="form-group">
                    <label for="Title">Title</label>
                    <input type="text" class="form-control"  placeholder="Enter Title" value={Title} onChange={e=>setTitle(e.target.value)}/>
                    
                </div>
                <div class="form-group">
                    <label for="Description">Description</label>
                    <input type="text" class="form-control" placeholder="Enter Description" value={Desc} onChange={e=>setDesc(e.target.value)}/>
                </div>
                
                <button type="submit" class="btn btn-primary btn-sm btn-success">Add</button>
            </form>
        </div>
    )
}
