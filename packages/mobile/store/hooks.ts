import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, ReduxState } from '.';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<ReduxState> = useSelector;
