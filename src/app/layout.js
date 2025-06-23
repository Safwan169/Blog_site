'use client'
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lama Dev Blog App",
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
                  {children}
        </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
