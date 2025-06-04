import {
  type Action,
  configureStore,
  type ThunkAction,
} from "@reduxjs/toolkit";
import productSlice from "../features/product/productSlice";
import authSlice from "../features/auth/authSlice";

// * в store хранятся данные из всего react приложения
// они изменяются с помощью функции reducer, в которую передается action

export const store = configureStore({
  reducer: {
    // подключаем функции reducer для обработки данных из файлов slice
    products: productSlice.reducer,
    user: authSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// import { combineReducers, createStore } from "redux";
// import counterReducer from "./features/counter/counterReducer";

// const store = createStore(combineReducers(
//     {
//         counter:counterReducer
//         // здесь имена других фич и ссылка на редюсеры

//     }
// ))
// export default store;
// export type RootState = ReturnType<typeof store.getState>;
// // store.getState
// //Это метод Redux-хранилища (store), который возвращает текущее
// //  состояние всего приложения (глобальное состояние).

// // typeof store.getState
// //Получаем тип функции getState (а не результат её вызова). 

// //ReturnType<typeof store.getState>
// // Используем TypeScript-утилиту ReturnType,
// //  чтобы извлечь тип возвращаемого значения

// // export type RootState 
// // экспорт   глобального состояния Redux-приложения.

