import { GoHome } from "react-icons/go";
import { LuLibrary } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { FaPlus } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { GoDotFill } from "react-icons/go";
import { IoMdArrowDropright } from "react-icons/io";
import Image from "next/image";

export default function Sidebar() {
  const { data: session } = useSession();
  console.log(session?.user);


  const [playlists, setPlaylists] = useState<any[]>([]);

  useEffect(() => {
    async function fetcher() {
      if (session && session.user) {
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
    <div className="w-96 text-neutral-400 grow-0 shrink-0 h-screen overflow-y-scrool p-2 ">
      <Card className="flex flex-col space-y-4 bg-[#121212] border-black">
        <CardContent>
          <Link href="/">
            <div className="flex flex-row items-center gap-8 text-slate-300 pt-6  hover:text-white transition ease-in-out delay-150">
              <GoHome className=" h-6 w-6" />
              <h1 className="font-circular font-semibold ">Home</h1>
            </div>
          </Link>
        </CardContent>
        <CardContent>
          <Link href="/login">
            <div className="flex flex-row items-center gap-8 text-slate-300 pt-4 hover:text-white transition ease-in-out delay-150">
              <CiSearch className="h-6 w-6" />
              <h1 className=" font-circular font-semibold ">Cari</h1>
            </div>
          </Link>
        </CardContent>
      </Card >
      <Card className="bg-[#121212] border-black mt-4">
        <CardContent>
          <div className="mt-10">
            <div className="flex items-center justify-between text-white">
              <div className="flex flex-row items-center gap-1 text-slate-300">
                <LuLibrary />
                <h2 className="font-bold">Koleksi Kamu</h2>
              </div>
              <div className="flex flex-row gap-2 text-slate-300">

                <FaPlus className="h-4 w-4" />
                <FaArrowRight className="" />
              </div>
            </div>
            <div className="mt-4 space-y-1">
              <Badge className="text-white bg-[#282828]">
                Daftar putar
              </Badge>
              <Badge className="text-white bg-[#282828]">Artis</Badge>
              <Badge className="text-white bg-[#282828]">Album</Badge>
            </div>
          </div>
          <div className="mt-10 space-y-4">
            {playlists?.map((playlist) => (
              <div key={playlist.id}>
                <div className="flex items-center space-x-2 hover:bg-gray-300 transition ease-in-out delay-150">
                  {/* <Avatar>
                    <AvatarImage
                      alt="it’s just a phase"
                      src={playlist.images[0].url}
                    />
                  </Avatar> */}
               

                <Image src={playlist.images[0].url} alt={playlist.name} width={50} height={50} className="rounded-xl"/>
            
                  <div>
                    <h3 className="text-white">{playlist.name}</h3>
                    <p className="text-[#b3b3b3] text-sm flex flex-row items-center">
                  {playlist.type}<IoMdArrowDropright /> {playlist.owner.display_name}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </CardContent>
      </Card>
    </div>
  );
}
