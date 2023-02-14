import { createSlice } from '@reduxjs/toolkit'

export const settingSlice = createSlice({
    name: "setting", 
    initialState: {value: {}}, 
    reducers: {
        changeSetting: (state, action) => {
            state.value = action.payload
        },
    },
});

export default settingSlice
export const { changeSetting } = settingSlice.actions