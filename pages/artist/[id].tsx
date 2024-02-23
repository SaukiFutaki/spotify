import { Card, CardContent } from "@/components/ui/card";
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

  const { data: artistData, error: artistError } = useSWR(
    id ? `https://api.spotify.com/v1/artists/${id}` : null,
    fetcher
  );

  const { data: topTracks, error: topTracksError } = useSWR(
    id
      ? `https://api.spotify.com/v1/artists/${id}/top-tracks?market=ID`
      : null,
    fetcher
  );

  const { data: relatedArtists, error: relatedArtistsError } = useSWR(
    id ? `https://api.spotify.com/v1/artists/${id}/related-artists` : null,
    fetcher
  );

if (!artistData || !topTracks || !relatedArtists) {
    return <div>Loading...</div>;
  }

  if (artistError || topTracksError || relatedArtistsError) {
    return <div>Error</div>;
  }
  
  const duration = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (parseInt(seconds) < 10 ? "0" : "") + seconds;
  };
  console.log(artistData);
  console.log(topTracks);
  console.log(relatedArtists);

  return (
    <div className="pt-2 flex-grow h-screen">
     <Card className="w-full h-screen border-black bg-[#121212] p-2 rounded-xl">
        <Image src={artistData?.images[0].url} alt={artistData.name} width={500} height={500} className=" aspect-video rounded-xl"/>
      <CardContent>
        {artistData.name}
        {artistData.genres.map((genre : any)=> genre)}

      </CardContent>
     <div className="flex flex-col">
      {topTracks.tracks.map((track: any) => (
        <div key={track.id} className="flex flex-row">
          <p>{track.name}</p>
          <p>{track.album.name}</p>
          <p>{duration(track.duration_ms)}</p>
         
        </div>
      ))}
      
     </div>
     </Card>

    </div>
  );
}
