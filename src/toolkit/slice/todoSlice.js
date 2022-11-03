import { createSlice } from "@reduxjs/toolkit";


const initialState = []
console.log(initialState);

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
      addTodo: (state, action) => {
        const todo = {
          id: Date.now(),
          text: action.payload.text,
        };
        state.push(todo);
      },
      removeTodo: (state, action) => {
        return state = state.filter((todo) => todo.id !== action.payload.id);
      },
    },
});


export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
    