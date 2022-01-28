import { TodoListItem } from '../TodoListItem/TodoListItem'
import { useAppSelector } from '../../hooks/redux'

export const TodoList = (): JSX.Element => {
  const { todos } = useAppSelector((state) => state.todoReducer)
  console.log(todos)
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoListItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
            />
          )
        })}
      </ul>
    </div>
  )
}
