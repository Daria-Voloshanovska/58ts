// import styles from './ProtectedRoute.module.css'
import type { JSX } from 'react';
import { useAppSelector } from '../../app/hooks';
import { Navigate } from 'react-router-dom';


interface IProtectedRouteProps {
    outlet:JSX.Element
}
export default function ProtectedRoute({outlet}:IProtectedRouteProps):JSX.Element {
     // забираем данные по юзеру
const {user} = useAppSelector(store => store.user)

// если юзер есть показываем компонент
 if (user.id) {
    return outlet;
  }
// если нет делаем переадресацию
  return <Navigate to='/login'/>
}