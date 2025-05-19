import styles from "./MyButton.module.css";
import cn from "classnames";

// описали интерфейс для props
interface IMyButtonProps {
  text?: string;
  type?: "button" | "submit" | "reset";
  // описываем функцию внутри обьекта
  func?: () => void;
  // * кнопка активна или нет
  disabled?: boolean;
  variant?: "primary" | "danger" | "success";
}

// используем интерфейс в описании функции
function MyButton({
  text = "Click me..",
  type = "button",
  func = () => console.log("click!"),
  disabled = false,
  variant = "primary",
}: IMyButtonProps) {
  return (
    <button
      onClick={func}
      type={type}
      className={cn(styles.MyButton, {
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
