
import React, { type JSX } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Counter():JSX.Element {
    const dispatch = useDispatch();
    function handlePlus():void{
        // Dispatch мы вызываем когда хотим изменить централизованное состояние
        dispatch({type: 'counter/plus', payload: 1})
    }

    function handleMinus():void{
        dispatch({type: 'counter/minus', payload: 1})
    }

    function handleReset():void{
        dispatch({type: 'counter/reset'})
    }

    // const counter = useSelector({state:RootState} => state.counter.value)
    // state:RootState - адрес в store
  return (
    <div>
     <button type="button" onClick={handlePlus}>+</button>
        {/* {counter} */}
        <button type="button" onClick={handleMinus}>-</button>
        <button type="button" onClick={handleReset}>Reset</button>
    </div>
  )
}
// Начальное состояние: Создаётся начальное состояние initialState для счётчика.
// initialState имеет свойство value, установленное на 0.
// Тип этого начального состояния указан как CounterState.
// Функция counterReducer: Экспортируется функция counterReducer,
// которая принимает два аргумента: state и action.
// state инициализируется значением initialState,
// но если не передано значение, то будет использовано initialState.
// action представляет собой действие, которое нужно применить к состоянию.
// Ожидается, что action будет иметь свойство type для определения типа действия и,
// возможно, payload для передачи данных.
// switch-case конструкция: Внутри функции counterReducer используется оператор switch,
// чтобы определить, какое действие следует предпринять в зависимости от типа action.type.
// case 'counter/minus': Если тип действия равен 'counter/minus',
// то выполняется вычитание значения action.payload из текущего state.value.
// case 'counter/plus': Если тип действия равен 'counter/plus',
// то выполняется сложение значения action.payload к текущему state.value.
// default: Если тип действия не совпадает ни с одним из указанных case,
// возвращается текущее состояние state без изменений.
// Возвращаемое значение: В зависимости от типа действия,
// функция counterReducer возвращает новое состояние с обновлённым значением value
// или текущее состояние, если тип действия не определён.