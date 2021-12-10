import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {RootState, AppDispatch} from './index';

//useDispatch: hook for dispatch() of redux
export const useAppDispatch = () => useDispatch<AppDispatch>();

//useSelector: very similar to mapStateToProps(). here it is type-restricted
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;