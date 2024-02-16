/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jJeRpGiBcuA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { AvatarImage, Avatar } from "@/components/ui/avatar"

export default function Component() {
  return (
    <div className="bg-[#121212] min-h-screen text-white">
      <div className="flex">
        <nav className="w-60 flex flex-col bg-[#000000] p-5 space-y-4">
          <HomeIcon className="text-white h-6 w-6" />
          <SearchIcon className="text-white h-6 w-6" />
          <LibraryIcon className="text-white h-6 w-6" />
          <div className="pt-5">
            <Button className="bg-[#b3b3b3] text-black">Koleksi Kamu</Button>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <PlusIcon className="text-white h-4 w-4" />
              <span className="text-sm">Playlist Baru</span>
            </div>
            <div className="flex items-center space-x-2">
              <HeartIcon className="text-[#1ed760] h-4 w-4" />
              <span className="text-sm">Lagu yang Disukai</span>
            </div>
            <div className="flex items-center space-x-2">
              <HistoryIcon className="text-white h-4 w-4" />
              <span className="text-sm">Baru diputar</span>
            </div>
          </div>
        </nav>
        <main className="flex-grow">
          <header className="flex justify-between items-center p-5 bg-[#181818]">
            <div className="flex space-x-4">
              <ArrowLeftIcon className="text-white h-6 w-6" />
              <ArrowRightIcon className="text-white h-6 w-6" />
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost">Jelajahi Premium</Button>
              <Button variant="ghost">Pasang Aplikasi</Button>
              <Avatar>
                <AvatarImage alt="User avatar" src="/placeholder.svg?height=32&width=32" />
              </Avatar>
            </div>
          </header>
          <div className="bg-[#1f1f1f] p-5">
            <div className="flex items-center space-x-4">
              <HeartIcon className="text-[#1ed760] h-12 w-12" />
              <div>
                <h1 className="text-4xl font-bold">Lagu yang Disukai</h1>
                <p className="text-sm text-[#b3b3b3]">Playlist - 220 lagu</p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-60 bg-[#121212] p-5 space-y-4">
              <div className="flex items-center space-x-2">
                <HeartIcon className="text-[#1ed760] h-4 w-4" />
                <span className="text-sm">Lagu yang Disukai</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage alt="User avatar" src="/placeholder.svg?height=32&width=32" />
                  </Avatar>
                  <span className="text-sm">happy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage alt="User avatar" src="/placeholder.svg?height=32&width=32" />
                  </Avatar>
                  <span className="text-sm">it's just a phase</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage alt="User avatar" src="/placeholder.svg?height=32&width=32" />
                  </Avatar>
                  <span className="text-sm">Taylor Swift</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage alt="User avatar" src="/placeholder.svg?height=32&width=32" />
                  </Avatar>
                  <span className="text-sm">Olivia Rodrigo</span>
                </div>
              </div>
            </div>
            <div className="flex-grow bg-[#181818] p-5">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Playlist</h2>
                <MoreHorizontalIcon className="text-white h-6 w-6" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm">#</span>
                    <span className="text-sm">Judul</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm">Album</span>
                    <CalendarIcon className="text-white h-4 w-4" />
                    <span className="text-sm">3:14</span>
                    <HeartIcon className="text-[#1ed760] h-4 w-4" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm">1</span>
                    <span className="text-sm">All We Know</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm">All We Know</span>
                    <span className="text-sm">2 minggu yang lalu</span>
                    <span className="text-sm">3:14</span>
                    <HeartIcon className="text-[#1ed760] h-4 w-4" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm">2</span>
                    <span className="text-sm">Eastside (with Halsey & Khalid)</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm">FRIENDS KEEP SECRETS</span>
                    <span className="text-sm">2 minggu yang lalu</span>
                    <span className="text-sm">2:50</span>
                    <HeartIcon className="text-[#1ed760] h-4 w-4" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm">3</span>
                    <span className="text-sm">Closer</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm">Closer</span>
                    <span className="text-sm">2 minggu yang lalu</span>
                    <span className="text-sm">4:04</span>
                    <HeartIcon className="text-[#1ed760] h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#181818] p-5 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage alt="User avatar" src="/placeholder.svg?height=32&width=32" />
              </Avatar>
              <div>
                <span className="text-sm">Wide Awake</span>
                <span className="text-xs text-[#b3b3b3]">Katy Perry</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ShuffleIcon className="text-white h-6 w-6" />
              <ArrowLeftIcon className="text-white h-6 w-6" />
              <PlayIcon className="text-white h-12 w-12" />
              <ArrowRightIcon className="text-white h-6 w-6" />
              <RepeatIcon className="text-white h-6 w-6" />
            </div>
            <div className="flex items-center space-x-4">
              <SpeakerIcon className="text-white h-6 w-6" />
              <div className="w-24 h-1 bg-[#b3b3b3] rounded-lg overflow-hidden">
                <div className="w-12 h-1 bg-[#1ed760] rounded-lg" />
              </div>
              <VolumeIcon className="text-white h-6 w-6" />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function ArrowLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}


function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}


function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}


function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function HistoryIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M12 7v5l4 2" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function LibraryIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 6 4 14" />
      <path d="M12 6v14" />
      <path d="M8 8v12" />
      <path d="M4 4v16" />
    </svg>
  )
}


function MoreHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  )
}


function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function RepeatIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function ShuffleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22" />
      <path d="m18 2 4 4-4 4" />
      <path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2" />
      <path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8" />
      <path d="m18 14 4 4-4 4" />
    </svg>
  )
}


function SpeakerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <circle cx="12" cy="14" r="4" />
      <line x1="12" x2="12.01" y1="6" y2="6" />
    </svg>
  )
}


function VolumeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    </svg>
  )
}

ki mayan dadi