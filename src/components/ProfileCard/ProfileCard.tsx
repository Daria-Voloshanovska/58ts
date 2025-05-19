import styles from "./ProfileCard.module.css"
import cn from 'classnames'


interface IProfileCardProps {
  avatar: string;
  firstName: string;
  lastName: string;
  occupation: string;
  hobbies: string[];
}

function ProfileCard({avatar, firstName, lastName, occupation, hobbies = []
}:IProfileCardProps) {
  return (
    <div className={cn(styles.card)}>
    <img src={avatar} alt="avatar" className={cn(styles.avatar)} />
      <h2>
        {firstName} {lastName}
      </h2>
      <p className={cn(styles.text)}>
        <b>Occupation:</b> {occupation}
      </p>
      <p className={cn(styles.text)}>
        <b>Hobbies:</b> {hobbies.join(", ")}
      </p>
    </div>
  );
}

export default ProfileCard;
