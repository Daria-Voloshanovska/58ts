import MyButton from '../myButton/MyButton';
import styles from './ChildrenProps.module.css'
import type { JSX } from 'react';



interface IChildrenPropsProps {
  children:React.ReactNode;
  func: () => void;
}

export default function ChildrenProps({children, func}:IChildrenPropsProps ):JSX.Element {
  return (
    <div className={styles.card}>
      {children}
      <MyButton variant="danger" text="на этой кнопке могут быть разные функции..." func={func} />
    </div>
  )
}