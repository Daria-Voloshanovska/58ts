import styles from './UserCard.module.css'
import cn from 'classnames'

interface IUserCardProps {
    name?: string
    age?: number
    hobby?: string
}
//function UserCard(props) {
  //  console.log(props)

  // через деструктуризацию разделяем передаваемый из родительского компонента объект props с данными на переменные с таким же названием, как и у ключей в передаваемом объекте
function UserCard({ name='John Doe', age=404, hobby }: IUserCardProps) {

   
    return (
        <div className={cn(styles.UserCard)}>
            <h4>Name: {name} </h4>
            <p>Age: {age}</p>
            <p>{hobby ? "Hobby: " + hobby : 'No hobby' }</p>
            
        </div>
    )
    
}
export default UserCard;
