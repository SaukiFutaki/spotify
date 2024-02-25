import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/components/Header";
import { Session } from "next-auth";
import useSWR from "swr";

interface CustomSession extends Session {
  accessToken?: string;
}

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession() as { data: CustomSession | null };
  console.log(session?.user);

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
    <div className="pt-2 flex-grow scrollbar-hide">
      <div className="sticky top-0">
        <Header />
      </div>
      <Card className="w-full h-screen border-black bg-[#121212] p-2 rounded-xl ">
        <CardContent>
          {genres?.genres?.map((genre: any) => (
            <div key={genre} className="text-white">
             <h1>{genre}</h1>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
