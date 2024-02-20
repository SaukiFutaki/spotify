import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { signIn, signOut } from "next-auth/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Header = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <div
          onClick={() => signOut({ callbackUrl: "/" })}
          className="absolute z-20 top-5 right-8 flex items-center bg-black  text-white space-x-3   cursor-pointer rounded-full p-1 "
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  className="rounded-full w-7 h-7"
                  src={session?.user?.image ?? ""}
                  alt={session?.user?.name ?? ""}
                  width={10}
                  height={10}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-white">{session?.user?.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      ) : (
        <div
          onClick={() => signIn("spotify", { callbackUrl: "/" })}
          className="absolute z-20 top-5 right-8 flex items-center bg-green-400  text-white space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2"
        >
          <p className="text-sm">Login With Spotify</p>
        </div>
      )}
    </div>
  );
};

export default Header;
