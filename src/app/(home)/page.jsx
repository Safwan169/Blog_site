import Link from "next/link";
import styles from "../homepage.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";
import '../globals.css'
// import { SessionProvider } from "next-auth/react";
export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    // <SessionProvider>
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page}/>
        <Menu />
      </div>
    </div>
    // </SessionProvider>
  );
}
