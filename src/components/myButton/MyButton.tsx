import styles from "./MyButton.module.css";
import cn from "classnames";

// описали интерфейс для props
interface IMyButtonProps {
  text?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  // описываем функцию внутри обьекта
  func?: () => void;
  // * кнопка активна или нет
  disabled?: boolean;
  variant?: "primary" | "danger" | "success";
}

// используем интерфейс в описании функции
function MyButton({
  text = "Click me..",
  type = "submit",
  className ="", /* className поможет использовать кнопку с индивидуальными свойствами для разных проэктов */
  func = () => console.log("click!"),
  disabled = false,
  variant = "primary",
}: IMyButtonProps) {
  return (
    <button
      onClick={func}
      type={type}
      className={cn(styles.MyButton, className, {
        [styles.primary]: variant === "primary",
        [styles.danger]: variant === "danger",
        [styles.success]: variant === "success",
        [styles.disabled]: disabled === true,
      })}
    >
      {text}
    </button>
  );
}

export default MyButton;
