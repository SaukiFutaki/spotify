/* eslint-disable react-hooks/exhaustive-deps */
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { shuffle } from "lodash";


export default function Playlists() {
  const router = useRouter();
  const { slug } = router.query;
  const { data: session } = useSession();
  console.log(session?.user);
  const [playlists, setPlaylists] = useState<any>(null);
  const [totalDuration, setTotalDuration] = useState<number>(0);

  const colors = [
    "from-indigo-500",
    "from-blue-500",
    "from-green-500",
    "from-red-500",
    "from-yellow-500",
    "from-pink-500",
    "from-purple-500",
    "from-emerald-500",
    "from-sky-500",
    "from-rose-500",
  ];
  const [color, setColor] = useState(colors[0]);

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
        let total = 0;
        data.tracks.items.forEach((item: any) => {
          total += item.track.duration_ms;
        });
        setTotalDuration(total);
        const duration = (ms: number) => {
          const hours = Math.floor(ms / (1000 * 60 * 60));
          const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((ms % (1000 * 60)) / 1000);
          return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        };
      }
    }
    fetcher();
  }, [session, slug]);
  useEffect(() => {
    setColor(shuffle(colors).pop() as string);
  }, [slug]);

  console.log(playlists);

  const duration = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + "menit" + (parseInt(seconds) < 10 ? "0" : "") + seconds;
  };

  const date = (dateString: string) => {
    const d = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    return d.toLocaleDateString("id-ID", options);
  };
  const likes = (count: number) => {
    return count ? count.toLocaleString("id-ID") : "";
  };

  return (
    <div className="pt-2 flex-grow h-screen">
      <Card className="w-full h-screen border-black bg-[#121212] p-2 overflow-y-auto ">
        <div
          className={`h-[350px] w-full bg-gradient-to-b ${color}  rounded-xl`}
        >
          <div className="flex flex-row gap-4 items-center pt-20 pl-4">
            <Image
              src={playlists?.images[0].url}
              alt={playlists?.name}
              width={200}
              height={200}
              className="rounded-xl drop-shadow-2xl"
            />
            <div className="flex flex-col gap-2">
              <h1 className="">{playlists?.type}</h1>
              <h1 className="text-7xl font-bold">{playlists?.name}</h1>
              <h1 className="text-sm font-semibold text-gray-100 italic">
                {playlists?.description}
              </h1>
              <h1 className="font-bold">
                {" "}
                <Link href={`/user/${playlists?.owner.id}`} className="hover:underline" >
                {playlists?.owner.display_name}
                </Link>
                <span className="text-sm font-normal">
                  {" "}
                  {likes(playlists?.followers.total)} suka
                </span>
                <span>
                  {playlists?.tracks.total} lagu sekitar {duration(totalDuration)}
                </span>
              </h1>
            </div>
          </div>
        </div>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Judul</TableHead>
                <TableHead>Album</TableHead>
                <TableHead>added at</TableHead>
                <TableHead>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <LuClock3 />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Durasi</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
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
                          <Link href={`/track/${item.track.id}`}>
                            <p className="text-sm font-medium leading-none hover:underline line-clamp-1">
                              {item.track.name}
                            </p>
                          </Link>

                          <p className="text-sm leading-none ">
                            {item?.track.artists.map(
                              (artist: any, index: number) => (
                                <span key={artist.id}>
                                  <Link
                                    href={`/artist/${artist.id}`}
                                    className="hover:underline"
                                  >
                                    {artist.name}
                                  </Link>
                                  {index < item.track.artists.length - 1 &&
                                    ", "}
                                </span>
                              )
                            )}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      {" "}
                      <Link
                        className="hover:underline line-clamp-1"
                        href={`/album/${item.track.album.id}`}
                      >
                        {item.track.album.name}
                      </Link>
                    </TableCell>
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
