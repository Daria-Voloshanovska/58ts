import "./ProfileCard.css";
interface IProfileCardProps {
  avatar: string;
  firstName: string;
  lastName: string;
  occupation: string;
  hobbies: string[];
}

function ProfileCard({avatar, firstName, lastName, occupation, hobbies 
}:IProfileCardProps) {
  return (
    <div className="card">
      <img src={avatar} alt="avatar" className="avatar" />
      <h2>
        {firstName} {lastName}
      </h2>
      <p>
        <b>Occupation:</b> {occupation}
      </p>
      <p>
        <b>Hobbies:</b> {hobbies.join(", ")}
      </p>
    </div>
  );
}

export default ProfileCard;
