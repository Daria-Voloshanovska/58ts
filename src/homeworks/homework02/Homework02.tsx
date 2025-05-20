import ProfileCard from "../../components/ProfileCard/ProfileCard.js"
import "../../components/ProfileCard/ProfileCard.module.css";

function Homework02() {
 
    const user = [
      {
        avatar:
          "https://purepng.com/public/uploads/thumbnail//purepng.com-mickey-mousemickey-mousemickeymouseanimal-cartooncharacterwalt-disneyub-iwerksstudioslarge-yellow-shoered-shortswhite-glovesnetflix-1701528649670qlze8.png",
        firstName: "Mickey",
        lastName: "Mouse",
        occupation: "Main Disney character",
        hobbies: ["Traveling", "Helping friends", "Adventures"],
      },
      {
        avatar:
          "https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png",
        firstName: "Shrek",
        lastName: "Ogre",
        occupation: "Swamp guardian",
        hobbies: ["Mud baths", "Scaring people", "Hanging out with Donkey"],
      },
      {
        avatar:
          "https://images.justwatch.com/poster/310410860/s166/tom-and-jerry.avif",
        firstName: "Tom",
        lastName: "Cat",
        occupation: "House cat",
        hobbies: ["Chasing Jerry", "Playing piano", "Relaxing"],
      },
    ];

    return (
      <div>
        <h1>Profile Cards</h1>
        <div className="card-container">
          {user.map((user, index) => (
        <ProfileCard key={index} {...user} />
          ))}
        </div>
      </div>
    );
  };


export default Homework02;
