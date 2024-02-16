import Image from "next/image";
import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Sidebar from "@/components/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  const { data: session } = useSession();
  console.log(session?.user);

  const [ex, setEx] = useState<string>("");
  const [playlists, setPlaylists] = useState<any[]>([]);

  useEffect(() => {
    async function fetcher() {
      if (session && session.user) {
        setEx(session.accessToken);
        const response = await fetch("https://api.spotify.com/v1/me/playlists", {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        });
        const data = await response.json();
        setPlaylists(data.items);
      }
    }
    fetcher();
  }, [session]);

  console.log(playlists);
  return (
    <div>

   <main className="flex h-screen w-full overflow-hidden">
<Sidebar />
    <div>main</div>
   </main>
   {/* <div className="sticky bottom-0 h-24 w-full bg-red-200"></div> */}
    </div>
  );
}
