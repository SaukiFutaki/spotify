import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Session } from "next-auth";

interface CustomSession extends Session {
  accessToken?: string; 
}

export default function Artists() {
  const router = useRouter();
  const { id } = router.query;
  const { data: session } = useSession() as { data: CustomSession | null};
  console.log(session?.user);

  const fetcher = (url: string) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${session?.accessToken || ""}`,
      },
    }).then((res) => res.json());

  const { data: album, error } = useSWR(
    id ? `https://api.spotify.com/v1/albums/${id}` : null,
    fetcher
  );


if (!album ) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }


  console.log(album)

  return (
    <div>
      <div className="">
       {album.name}
      </div>
    </div>
  );
}
