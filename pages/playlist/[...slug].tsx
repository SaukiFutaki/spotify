import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { LuClock3 } from "react-icons/lu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export default function Playlists() {
  const router = useRouter();
  const { slug } = router.query;
  const { data: session } = useSession();
  console.log(session?.user);

  const [playlists, setPlaylists] = useState<any>(null);

  const colors = [
    "from-indigo-500",
    "from-blue-500",
    "from-green-500",
    "from-red-500",
    "from-yellow-500",
    "from-pink-500",
    "from-purple-500",
  ];
  //
  useEffect(() => {
    async function fetcher() {
      if (session && "accessToken" in session && slug) {
        const response = await fetch(
          `https://api.spotify.com/v1/playlists/${slug}`,
          {
            headers: {
              Authorization: `Bearer ${session.accessToken}`,
            },
          }
        );
        const data = await response.json();
        setPlaylists(data);
      }
    }
    fetcher();
  }, [session, slug]);
  console.log(playlists);

  const duration = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (parseInt(seconds) < 10 ? "0" : "") + seconds;
  };

  const date = (dateString: string) => {
    const d = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    return d.toLocaleDateString('id-ID', options);
  };
  return (
    <div className="pt-2 flex-grow h-screen">
      {/* <header className="text-white sticky top-0 h-20 z-10 text-4xl bg-neutral-800 p-8 flex items-center font-bold">
        <div className="flex items-center">
          {playlistData && <img className='h-8 w-8 mr-6' src={playlistData.images[0].url} />}
                    <p>{playlistData?.name}</p>
        </div>
      </header> */}

      <Card className="w-full h-screen border-black bg-[#121212] p-2 overflow-y-auto ">
        <CardContent>
          <div className="flex flex-row gap-2">
            <Image
              src={playlists?.images[0].url}
              alt={playlists?.name}
              width={200}
              height={200}
            />
            <div className="flex flex-col">
              <h1 className="">{playlists?.type}</h1>
              <h1 className="text-3xl font-bold">{playlists?.name}</h1>
              <h1>{playlists?.owner.display_name}</h1>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Judul</TableHead>
                <TableHead>Album</TableHead>
                <TableHead>Tanggal Ditambahkan</TableHead>
                <TableHead>
                  <LuClock3 />
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {playlists?.tracks.items.map((item: any, index: number) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell className="">
                      <div className="flex flex-row gap-2">
                        <Image
                          className="rounded-xl"
                          src={item?.track?.album?.images[0]?.url}
                          alt={item?.name}
                          width={50}
                          height={50}
                        />
                        <div className="flex flex-col gap-2 justify-center">
                          <p className="text-sm font-medium leading-none">{item.track.name}</p>
                          <p className="text-sm  leading-none hover:underline">
                            <Link href={`/artist/${item?.track.artists[0].id}`}>
                              {item?.track.album.artists[0].name}
                            </Link>
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{item.track.album.name}</TableCell>
                    <TableCell>{date(item.added_at)}</TableCell>
                    <TableCell>{duration(item.track.duration_ms)}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
