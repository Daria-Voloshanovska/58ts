import { useEffect, useState, type JSX } from "react";
import styles from './FetchFox.module.css';
import MyButton from "../myButton/MyButton";
import Loader from "../loader/Loader";

interface IFoxData {
  image: string;
  link: string;
}

export default function FetchFox(): JSX.Element {
  const [foxImg, setFoxImg] = useState<string>("#");
  const [loading, setLoading] = useState<boolean>(true);

  const fetchFox = ():void => {
    setLoading(true)
    setTimeout(async ():Promise<void> => {
      const res: Response = await fetch('https://randomfox.ca/floof/');
      const data: IFoxData = await res.json();
      setFoxImg(data.image);
      setLoading(false)
    }, 2000)
  };

  useEffect(() => {
    fetchFox()
  }, []);

  return (
    <div>
      {loading ? <Loader /> : (
        <>
          <section className={styles.foxWrapper}>
            <img src={foxImg} alt="foxImg" />
          </section>
          <MyButton func={fetchFox} text="get new fox" />
        </>
      )}
    </div>
  );
}