import { useState, type JSX } from 'react'
import style from './Sandwich.module.css'
import useTheme from '../../themeContext/useTheme';


export default function Sandwich(): JSX.Element {
    const [sandwich,setSandwich] = useState<string>('Sandwich :');
    const (theme,toggleTheme) = useTheme; // используем хук для темы

    function handleAddBread():void{
        setSandwich(`${sandwich} Bread 🍞`)
    }
    function handleAddCaviar():void{
        setSandwich(`${sandwich} Caviar 🧆`)
    }
    function handleAddButter():void{
        setSandwich(`${sandwich} Butter 🧈`)
    }
    function handleAddCheese():void{
        setSandwich(`${sandwich} Cheese 🧀`)
    }
    function handleAddClear(): void{
        setSandwich("Sandwich :")
    }

  return (
    <div className={`${style.container} ${theme ==='dark' ? style.dark : style.light}`}>
      <h2>Sandwich</h2>
      <p>{sandwich}</p>
      <img src="https://mur-mur.top/uploads/posts/2023-05/1683186165_mur-mur-top-p-mini-burgeri-keitering-krasivo-53.jpg" alt="" />
      <div className={style.btnContainer}>
        <button type="button" className={style.btn} onClick={handleAddBread}>Add Bread</button>
        <button type="button" className={style.btn} onClick={handleAddCaviar}>Add Caviar</button>
        <button type="button" className={style.btn} onClick={handleAddButter}>Add Butter</button>
        <button type="button" className={style.btn} onClick={handleAddCheese}>Add Cheese</button>
        <button type="button" className={style.btn} onClick={handleAddClear}>Delete</button>
      </div>
      {/* Кнопка для переключении темы  */}
      <button type='button' className={style.themeToogle} onClick={toggleTheme}>Switch theme</button>
    </div>
  )
}