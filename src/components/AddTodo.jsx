import React,{useState} from 'react'
import {useDispatch} from 'react-redux';
import { addTodo, removeTodo } from '../features/todo/todoSlice';

const AddTodo = () => {
    const [input,setInput]= useState('');

    //dispatch uses reducer to chane values in store
    const dispatch = useDispatch();

    const addToHandler= (e)=>{
        e.preventDefault()
        dispatch(addTodo(input));
        setInput('');
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }
    return (
       <form onSubmit={addToHandler} className="flex m-2">
      <input
        type="text" 
        placeholder="Write Todo..."
        className="w-full  border border-black-100 rounded-l-lg px-3 outline-none duration-150 bg-white-100 py-1.5 text-black"
        value={input}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
   
  )
}

export default AddTodo
