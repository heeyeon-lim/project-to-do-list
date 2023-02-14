import { createSlice } from '@reduxjs/toolkit'; 

export const todosSlice = createSlice({
    name: "todos",
    initialState: {value: [{id: 100, title: 'haha', tags: [], onEdit: false, date: ''}]},
    reducers: {
        changeTodos: (state, action) => {
            state.value = action.payload
        },
    }
})

export default todosSlice; 
export const { changeTodos } = todosSlice.actions;
