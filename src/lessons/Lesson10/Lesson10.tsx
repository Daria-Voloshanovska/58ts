import styles from './Lesson10.module.css'
import { useEffect, useState } from "react";
import type { JSX } from "react";
import MyButton from '../../components/myButton/MyButton';
import CatsGallery from '../../components/cats/CatsGallery';
import Loader from '../../components/loader/Loader';

interface ICatFact {
    fact: string;
    length: number;
}
interface ICatImage {
id: string;
url: string;
width: number;
height: number;
}

interface ICatFactWithImage {
     fact: string;
     imageUrl: string;
}

export default function Lesson10():JSX.Element {

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<ICatFactWithImage[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchCatData = async () => {
  setLoading(true);
    setError(null);
  try {
    const [factRes, imageRes] = await Promise.all([
      fetch("https://catfact.ninja/fact"),
      fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=false&order=RANDOM&page=0&limit=1")
    ]);

    if (!factRes.ok || !imageRes.ok) {
      throw new Error("Error fetching data");
    }

    const factData:ICatFact = await factRes.json();
    const imageData:ICatImage[] = await imageRes.json();

     if (!imageData.length) {
                throw new Error("No image data received");
            }

    return{
        fact: factData.fact,
        imageUrl: imageData[0].url
      };

  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
  };

  const handleGetMoreInfo = async () => {
        const newData = await fetchCatData();
        if (newData) {
            setData(prev => [...prev, newData]);
        }
    };

    const handleDeleteAllData = () => {
        setData([]);
    };
  useEffect(() => {
    const loadInitialData = async () => {
            const initialData = await fetchCatData();
            if (initialData) {
                setData([initialData]);
            }
        };
        loadInitialData();
    }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Project: Cats & Facts :😺</h1>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.btnsContainer}>
         <MyButton
                    text="GET MORE INFO"
                    type="button"
                    func={handleGetMoreInfo}
                    disabled={loading}
                    variant="primary"
                />
                {data.length > 0 && (
                    <MyButton
                        text="DELETE ALL DATA"
                        type="button"
                        func={handleDeleteAllData}
                        disabled={loading}
                        variant="danger"
                    />
                )}
      </div>
      {loading && <Loader/>}
  <div className={styles.factsContainer}>
                {data.map((item, index) => (
                    <div key={`${item.imageUrl}-${index}`} className={styles.factCard}>
                       <div className={styles.imageContainer}>
                                <img
                                    src={item.imageUrl}
                                    alt="Random cat"
                                    className={styles.catImage}
                                />
                        </div>
                        <div className={styles.textContent}>
                            <p className={styles.factText}>{item.fact}</p>
                            <span className={styles.factMeta}>Fact #{index + 1}</span>
                        </div>
                    </div>
                ))}
      </div>
      <CatsGallery data={data} />
    </div>
  );
};

