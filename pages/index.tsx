import Image from "next/image";
import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Sidebar from "@/components/components/Sidebar";
import Playlist from "@/components/components/Playlist";
import Search from "@/components/components/Search";
import Library from "@/components/components/Library";
import Artist from "@/components/components/Artist";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  console.log(session?.user);

  return (
    <div>
      <main className="flex h-screen w-full overflow-hidden ">

      </main>
      <div className="sticky bottom-0  w-full bg-red-200"></div>
    </div>
  );
}
