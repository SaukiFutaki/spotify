import { SessionProvider } from "next-auth/react"
import React from "react"
import "../styles/globals.css"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: {
  Component: React.ComponentType
  pageProps: { session: any; [key: string]: any }
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}