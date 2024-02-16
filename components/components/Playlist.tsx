import { useSession } from "next-auth/react"
import { useEffect,useState } from "react"

export default function Playlist({setView, setGlobalArtistId, globalPlaylistId} : {setView: any, setGlobalArtistId: any, globalPlaylistId: any}) {
  const {data : session} =useSession()
  const [playlistData, setPlaylistData] = useState<any>(null)

  useEffect(() => {
    async function f() {
        if (session && session.accessToken) {
            console.log(session)
            const response = await fetch(`https://api.spotify.com/v1/playlists/${globalPlaylistId}`, {
                headers: {
                    Authorization: `Bearer ${session.accessToken}`
                }
            })
            const data = await response.json()
            setPlaylistData(data)
        }
    }
    f()
}, [session, globalPlaylistId])

  console.log(playlistData)
  return(
    <div className="flex-grow h-screen bg-slate-400">
      <h1>{playlistData.name}</h1>
    </div>
  )
}