// импортировал CSS modules в  переменной
import styles from './Lesson09.module.css'
import MyButton from '../../components/myButton/MyButton';



export default function Lesson09() {
    console.log(styles);
    
  return (
    <div>
      <h1 className={styles.heading}>Lesson 09: CSS modules 🎨</h1>
      <p className={styles.info}>CSS modules - это технология позволяющая работать с CSS свойствами изолировано и независимо </p>
      <div>
        <MyButton text='primary'/>
        <MyButton text='danger' variant ='danger'/>
        <MyButton text='success' variant ='success'/>
        <MyButton text='disabled' disabled={true}/>
      </div>
      <p>Задачу добавления нескольких классов в CSS modules можно решить несколькими способами: </p>
      <ul>
        <li>Конкатенация(сложение строк)</li>
        <li>Шаблонная строка(для не сложных случаев)</li>
        <li>Библиотека Classnames(предпочтительный)</li>
      </ul>
    </div>
  )
}
