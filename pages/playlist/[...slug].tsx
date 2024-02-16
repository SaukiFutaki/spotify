import { useRouter } from "next/router"
import { useEffect,useState } from "react"
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Shop() {
  const router = useRouter()
  const { slug } = router.query
  const { data: session } = useSession();
  console.log(session?.user);
  
  const [playlists, setPlaylists] = useState<any[]>([]);
//
useEffect(() => {
  async function fetcher() {
    if (session && session.accessToken && router.query.slug) {
      const response = await fetch(
        `https://api.spotify.com/v1/playlists/${slug}`,
        {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        }
      );
      const data = await response.json();
      setPlaylists(data );
    }
  }
  fetcher();
}, [router.query.slug, session, slug]);

  console.log(slug)
  console.log(playlists);
  return (
    <div>Playlist {router.query.slug}
    <h1>{playlists.name}</h1>
    <h1>{playlists.description}</h1>

    {/* <Image src={playlists.images[0].url} width={200} height={200} alt={playlists.id}/> */}
    </div>
  )
}