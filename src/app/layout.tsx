"use client";
import Header from "./components/Header/Header";
import "./global.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StoreProvider } from "./providerStore/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="ru">
        <body className="flex flex-col items-center bg-gray-950">
          <Header />
          {children}
          <ToastContainer position="bottom-left" autoClose={1000} />
        </body>
      </html>
    </StoreProvider>
  );
}
