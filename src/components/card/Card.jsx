import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, item }) => {
  console.log(item,'thsiis is iteam')
  return (
    <div className={styles.container} key={key}>
      {item?.image && (
        <div className={styles.imageContainer}>
          <Image src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.image}`}alt="" fill className={styles.image} />
        </div>
      )}
       {/* <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
         <p className={styles.desc}>{item.desc.substring(0, 60)}</p> 
        <div className={styles.desc} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,60) }}/>
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>  */}
    </div>
  );
};

export default Card;
