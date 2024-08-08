import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";



const Todo = () => {

const todos= useSelector(state=> state.todos)
const dispatch = useDispatch();

  return(
    <div >
        {todos.map((todo)=>(
           <div className="flex  m-1 text-white bg-blue-600 p-1 rounded-xl">
            <div key={todo.id}>
                {todo.text}
            </div>
            <br />
            <button className="ml-4" onClick={()=>{dispatch(removeTodo(todo.id))}}>X</button>
            </div>
        ))}
    </div>
  )
};

export default Todo;
