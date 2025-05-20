import { useState } from "react";
import styles from './Feedback.module.css'
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
    <div className={styles.feedbackContainer}>
      <h1 className={styles.heading}>Feedback 😌</h1>
      <div className={styles.feedbackBtns}>
        <span className={styles.count}>{like}</span>
        <MyButton text="👍" func={handleLike} variant="success" />
        <MyButton text="👎" func={handleDislike} variant="danger" />
        <span className={styles.count}>{dislike}</span>
      </div>
      <div className={styles.resetSection}>
      <MyButton text="Reset Results" func={handleReset} variant="primary" />


      </div>
    </div>
  );

}

export default Feedback;
