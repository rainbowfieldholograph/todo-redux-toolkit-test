import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, TodoState } from '../store/store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<TodoState> = useSelector
