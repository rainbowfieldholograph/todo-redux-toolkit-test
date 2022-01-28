import { FormEvent } from 'react'

export interface InputFormProps {
  inputText: string
  updateInputText: (newValue: string) => void
  handleSubmit: () => any
}
