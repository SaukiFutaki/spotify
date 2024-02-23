import { GoHome } from "react-icons/go";
import { LuLibrary } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { Card, CardContent } from "@/components/ui/card";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { IoMdArrowDropright } from "react-icons/io";
import Image from "next/image";
import { usePathname } from "next/navigation";


export default function Sidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();
  console.log(session?.user);

  const [playlists, setPlaylists] = useState<any[]>([]);

  useEffect(() => {
    async function fetcher() {
      if (session && "accessToken" in session ) {
        const response = await fetch(
          "https://api.spotify.com/v1/me/playlists",
          {
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          }
        );
        const data = await response.json();
        setPlaylists(data.items);
      }
    }
    fetcher();
  }, [session]);
  console.log(playlists);

  return (
    <div className="w-96 text-neutral-400 flex-grow h-screen overflow-y-auto p-2 scrollbar-hide">
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
          <Link href="/search">
            <div
              className={` ${
                pathname === "/search" ? "bg-[#393939]" : "null"
              } flex flex-row items-center gap-8 text-slate-300 pt-2 hover:text-white transition ease-in-out delay-150 `}
            >
              <CiSearch className="h-6 w-6" />
              <h1 className=" font-circular font-semibold ">Cari</h1>
            </div>
          </Link>
        </CardContent>
      </Card>
      <Card className="bg-[#121212] border-black mt-4 ">
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
            {/* <div className="mt-4 space-y-1">
              <Badge className="text-white bg-[#282828]">Daftar putar</Badge>
              <Badge className="text-white bg-[#282828]">Artis</Badge>
              <Badge className="text-white bg-[#282828]">Album</Badge>
            </div> */}
          </div>
          <div className="mt-10 space-y-4 overflow-y-auto ">
            {playlists?.map((playlist) => (
              <div key={playlist.id} className="">
                <Link href={`/playlist/${playlist.id}`}>
                  <div
                    className={`${
                      pathname === `/playlist/${playlist.id}`
                        ? "bg-[#2A2A2A]"
                        : null
                    }   " flex items-center space-x-2 hover:bg-[#1A1A1A] transition  rounded-xl cursor-pointer"`}
                  >
                    {/* <Avatar>
                    <AvatarImage
                      alt="it’s just a phase"
                      src={playlist.images[0].url}
                      />
                  </Avatar> */}

                    <Image
                      src={playlist.images[0].url}
                      alt={playlist.name}
                      width={50}
                      height={50}
                      className="rounded-xl"
                    />

                    <div>
                      <h3 className="text-white">{playlist.name}</h3>
                      <p className="text-[#b3b3b3] text-sm flex flex-row items-center">
                        {playlist.type}
                        <IoMdArrowDropright /> {playlist.owner.display_name}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
