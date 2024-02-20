import { SessionProvider } from "next-auth/react";
import React from "react";
import "../styles/globals.css";
import Sidebar from "@/components/components/Sidebar";
import Header from "@/components/components/Header";
import NextTopLoader from 'nextjs-toploader';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: {
  Component: React.ComponentType;
  pageProps: { session: any; [key: string]: any };
}) {
  return (
    <SessionProvider session={session}>
      <div className="flex">
        <NextTopLoader />
        <Sidebar />
        <div className="flex-1">
          <Header />
          <Component {...pageProps} />
        </div>
      </div>
    </SessionProvider>
  );
}
