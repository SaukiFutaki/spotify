
import { useSession } from "next-auth/react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/components/Header";
import { Session } from "next-auth";
import useSWR from "swr";
import Link from "next/link";

interface CustomSession extends Session {
  accessToken?: string;
}
const Search = () => {
  const { data: session } = useSession() as { data: CustomSession | null };

  const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${session?.accessToken || ""}`,
    },
  }).then((res) => res.json());

const { data: genres, error } = useSWR(
  "https://api.spotify.com/v1/recommendations/available-genre-seeds",
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
      <div >
        <div>
          {genres?.genres?.map((genre: any) => (
            <Card key={genre} className="">
             <CardContent>
              <Link href={`/genre/${genre}`}>
              {genre}
              </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Search