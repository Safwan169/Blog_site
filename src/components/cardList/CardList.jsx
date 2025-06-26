'use client'
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Image from "next/image";
import Card from "../card/Card";
import { useGetPostQuery } from "@/redux/api/postApi";

// const getData = async (page, cat) => {
//   const res = await fetch(
//     `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
//     {
//       cache: "no-store",
//     }
//   );

//   if (!res.ok) {
//     return []
//   }

//   return res.json();
// };



const CardList =  ({ page, cat }) => {
  const {data}=useGetPostQuery()
  console.log(data,'this is for data dfadfaf')
  // const { posts, count } =  getData(page, cat);

  const POST_PER_PAGE = 2;

  // const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  // const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {data?.data?.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </div>
      {/* <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} /> */}
    </div>
  );
};

export default CardList;
