import { FormEvent } from 'react'
import styles from './InputForm.module.css'
import { InputFormProps } from './InputForm.props'

export const InputForm = ({ inputText, updateInputText, handleSubmit }: InputFormProps) => {
  const onSubmitForm = (event: FormEvent) => {
    event.preventDefault()
    handleSubmit()
  }

  return (
    <form onSubmit={onSubmitForm}>
      <label htmlFor="todoInput">Введите todo: </label>
      <input
        value={inputText}
        onChange={(event) => updateInputText(event.target.value)}
        id="todoInput"
        type="text"
      />
      <button type="submit">Add todo</button>
    </form>
  )
}
