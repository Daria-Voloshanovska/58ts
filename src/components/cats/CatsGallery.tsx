import styles from './CatsGallery.module.css'
import CatCard from './CatCard'

interface ICatFactWithImage {
  fact: string;
  imageUrl: string;
}

interface ICatsGalleryProps{
  data:ICatFactWithImage[];
}

export default function CatGallery({ data }: ICatsGalleryProps) {
  return (
    <div className={styles.galleryContainer}>
      {data.map((item, id) => (
        <CatCard
          key={id}
          fact={item.fact}
          imageUrl={item.imageUrl}
          index={id}
        />
      ))}
    </div>
  )
}


