// save all states in store
import { configureStore } from '@reduxjs/toolkit'
import settingSlice from '../slices/setting'
import todosSlice from '../slices/todos'

const store = configureStore({
    // contain all reducers (functions that take in information about states and action that I wanna perform on that state) 
    reducer: {
        todos: todosSlice.reducer,
      setting: settingSlice.reducer
    },
  })

  export default store