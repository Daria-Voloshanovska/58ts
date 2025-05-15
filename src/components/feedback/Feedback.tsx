import { useState } from "react";
import "./Feedback.css";
import MyButton from "../myButton/MyButton";



function Feedback () {
     const [like, setLikes] = useState<number>(0);
     const [dislike, setDislikes] = useState<number>(0);

     const handleLike = ():void => setLikes(prev => prev +1);

     const handleDislike = ():void => setDislikes(prev => prev +1);

     const handleReset = ():void => {
          setLikes(0);
          setDislikes(0);
     };
     return (
    <div>
      <h1>Feedback 😌</h1>
      <div>
        <span>{like}</span>
        <MyButton text="👍" func={handleLike} />
        <MyButton text="👎" func={handleDislike} />
        <span>{dislike}</span>
      </div>
      <div>
      <MyButton text="Reset Results" func={handleReset} />


      </div>
    </div>
  );

}

export default Feedback;
