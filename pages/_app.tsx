import { SessionProvider } from "next-auth/react";
import React from "react";
import "../styles/globals.css";
import Sidebar from "@/components/components/Sidebar";
import Header from "@/components/components/Header";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/components/Footer";
import { usePathname } from "next/navigation";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: {
  Component: React.ComponentType;
  pageProps: { session: any; [key: string]: any };
}) {
  const pathname = usePathname();
  return (
    <SessionProvider session={session}>
      <div className="flex overflow-hidden">
        <NextTopLoader color="#1FDF64" />
        <div className={`${pathname === "/login" ? "hidden" : "block"} overflow-hidden`}>
          <Sidebar />
        </div>
        <div className="flex-1 scrollbar-hide">
          <Component {...pageProps} />
        </div>
      </div>
    </SessionProvider>
  );
}
