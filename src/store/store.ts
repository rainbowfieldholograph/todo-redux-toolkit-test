import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todoReducer from './reducers/todoSlice'

const rootReducer = combineReducers({ todoReducer })

export const setupStore = () => configureStore({ reducer: rootReducer })

export type TodoState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
