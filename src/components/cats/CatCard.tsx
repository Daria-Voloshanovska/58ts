import styles from '../../lessons/Lesson10/Lesson10.module.css'
interface ICatCard {
  fact: string;
  imageUrl: string;
  index: number;
}

export default function CatCard({ fact, imageUrl, index }: ICatCard) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt="Random cat" className={styles.catImage} />
      </div>
      <div className={styles.cardContent}>
        <p className={styles.factText}>{fact}</p>
        <span className={styles.cardNumber}>Fact #{index + 1}</span>
      </div>
    </div>
  );
}