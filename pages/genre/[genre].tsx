import { useRouter } from 'next/router';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { Session } from 'next-auth';

interface CustomSession extends Session {
  accessToken?: string;
}

export default function Genre(){
  const router = useRouter();
  const { genre } = router.query;
  
  const { data: session } = useSession() as { data: CustomSession | null };

  const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${session?.accessToken || ""}`,
    },
  }).then((res) => res.json());

const { data: genres, error } = useSWR(
 `https://api.spotify.com/v1/recommendations?market=ID&seed_genres=${genre}&limit=10`,
  fetcher
);

if (!genres) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>Error</div>;
}
  console.log(genres);
  return (
    <div>
{genre}
    </div>
  )
}