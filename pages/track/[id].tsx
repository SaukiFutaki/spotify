import { Card } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useState } from "react";
import { Session } from "next-auth";

interface CustomSession extends Session {
  accessToken?: string; 
}

export default function Artists() {
  const router = useRouter();
  const { id } = router.query;
  const { data: session } = useSession() as { data: CustomSession | null};
  const [headerColor, setHeaderColor] = useState(getRandomColor());
  console.log(session?.user);

  const fetcher = (url: string) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${session?.accessToken || ""}`,
      },
    }).then((res) => res.json());

  const { data: track, error } = useSWR(
    id ? `https://api.spotify.com/v1/tracks/${id}` : null,
    fetcher
  );

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  if (!track) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  console.log(track);

  return (
    <div className="pt-2">
      <Card className="w-full h-screen border-black bg-[#121212] p-2 o ">
      <header className="h-[250px] w-full bg-gradient-to-r from-indigo-300 via-sky-500 to-emerald-500 opacity-80 shadow-md rounded-xl">
          <Image
            src={track.album.images[0].url}
            alt={track.name}
            width={200}
            height={200}
            className="shadow-xl rounded-xl "
          />
          <h1>{track.type}</h1>
        </header>
      </Card>
    </div>
  );
}
