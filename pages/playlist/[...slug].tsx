import { useRouter } from "next/router"
import { useEffect,useState } from "react"
import { useSession } from "next-auth/react";
import Image from "next/image";
import DetailPlaylist from "@/components/components/Playlist";

export default function Shop() {
  const router = useRouter()
  const { slug } = router.query
  const { data: session } = useSession();
  console.log(session?.user);
  
  const [playlists, setPlaylists] = useState<any>(null);
//
useEffect(() => {
  async function fetcher() {
    if (session && session.accessToken && slug) {
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
}, [session,slug]);
  console.log(playlists);
  return (
    <div className="pt-2">

  <DetailPlaylist name={playlists?.name} image={playlists?.images[0]?.url} type={playlists?.type} owner={playlists?.owner.display_name}  track={playlists?.tracks.items.map((item: any) => item.track.name)}/>
    </div>
   
  )
}