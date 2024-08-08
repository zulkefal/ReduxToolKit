import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{
        id:1,
        text:"Zulkefal"
    }]
}

const sayHello =()=>{
    console.log("Hello")
}
export const todoSlice= createSlice({
    name: "todo",
    initialState,
    //porperites and functions
    reducers:{

        //state tell about current state value
        //action tell about the value that we want to add
        addTodo:(state,action)=>{
            const toDo = {
                id:nanoid(),
                text:action.payload
            };
            state.todos.push(toDo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },

    }
})

export const {addTodo,removeTodo}= todoSlice.actions;
export default todoSlice.reducer;