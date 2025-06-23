import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

// const getData = async () => {
//   console.log('asdfsfa')
//   // const res = await fetch("http://localhost:3000/api/categories", {
//   //   cache: "no-store",
//   // });

//   console.log(res,'this is resssss')

//   if (!res?.ok) {
//     throw new Error("Failed");
//     return [];
//   }

//   return res.json();
// };

const CategoryList = async () => {
  // const data = await getData()|| [];
  const data =  [];

  console.log(data,'this is dadta ')
  // const data = [];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href="/blog?cat=style"
            className={`${styles.category} ${styles[item.slug]}`}
            key={item._id}
          >
            {item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
