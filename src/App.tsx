import { FC, useState } from 'react'
import './App.css'
import { TodoList } from './components/TodosList/TodoList'
import { InputForm } from './components/InputForm/InputForm'
import { useAppDispatch } from './hooks/redux'
import { generateNewTodo } from './store/reducers/todoSlice'

const App: FC = (): JSX.Element => {
  const [inputText, setInputText] = useState<string>('')
  const dispatch = useAppDispatch()
  const addTask = () => {
    dispatch(generateNewTodo(inputText))
    setInputText('')
  }
  return (
    <div className="App">
      <InputForm inputText={inputText} updateInputText={setInputText} handleSubmit={addTask} />
      <TodoList />
    </div>
  )
}

export default App
