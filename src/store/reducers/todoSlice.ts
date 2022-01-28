import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITodoItem } from '../../interfaces/TodoItem.interface'

interface SlaceState {
  todos: ITodoItem[]
}

const initialState: SlaceState = { todos: [] }

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    generateNewTodo(state, action: PayloadAction<string>) {
      state.todos.push({
        id: +new Date(),
        text: action.payload,
        completed: false,
      })
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    toggleTodoCompleted(state, action) {
      const toggledTodo = state.todos.find((todo) => todo.id === action.payload)
      if (toggledTodo) toggledTodo.completed = !toggledTodo.completed
    },
  },
})

export const { generateNewTodo, removeTodo, toggleTodoCompleted } = todoSlice.actions

export default todoSlice.reducer
