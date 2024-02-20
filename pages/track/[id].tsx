import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function Artists() {
  const router = useRouter();
  const { id } = router.query;
  const { data: session } = useSession();
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


if (!track ) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }


  console.log(track)

  return (
    <div>
      <div className="">
       {track.name}
      </div>
    </div>
  );
}
