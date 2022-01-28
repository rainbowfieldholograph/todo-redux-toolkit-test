import { Fragment } from 'react'
import { TodoListItemProps } from './TodoListItem.props'
import styles from './TodoListItem.module.css'
import { useAppDispatch } from '../../hooks/redux'
import { removeTodo, toggleTodoCompleted } from '../../store/reducers/todoSlice'

export const TodoListItem = ({ id, text, completed }: TodoListItemProps) => {
  const dispatch = useAppDispatch()

  return (
    <Fragment>
      <li className={styles.wrapper}>
        <input
          className={styles.completed}
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(toggleTodoCompleted(id))}
        />
        <p>{text}</p>
        <button onClick={() => dispatch(removeTodo(id))}>
          <span className={styles.delete}>&times;</span>
        </button>
      </li>
    </Fragment>
  )
}
