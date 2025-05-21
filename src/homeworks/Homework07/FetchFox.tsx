import { useEffect, useState } from "react";
import Loader from '../../components/loader/Loader';
import MyButton from "../../components/myButton/MyButton";
import './Fetchfox.module.css'
import styles from "./Fetchfox.module.css"

interface IFoxData {
  image: string;
  link: string;
}

export default function FetchFox() {
    const [foxImg, setFoxImg] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchFox  = ():void => {
       setIsLoading(true);
         fetch("https://randomfox.ca/floof/")
      .then((res) => res.json())
      .then((data) => setFoxImg(data.image));
      setIsLoading(false);

//      const fetchFox = ():void => {
//     setLoading(true)
//     setTimeout(async ():Promise<void> => {
//       const res: Response = await fetch('https://randomfox.ca/floof/');
//       const data: IFoxData = await res.json();
//       setFoxImg(data.image);
//       setLoading(false)
//     }, 2000)
//   };
  };      
   
    useEffect(() => {
      fetchFox ()
    }, []); 

    return (
        
<div className={styles.container}>
     <h1 className={styles.title}>Random Fox 🦊</h1>
    {isLoading ? (<Loader/>) : (
       <>
       <section className={styles.foxWrapper}>
        <img src={foxImg} alt="Random fox"/>
    </section>
 <MyButton func={fetchFox } text="Show another fox"></MyButton>  
       </> 
        )}
</div>
    );
}