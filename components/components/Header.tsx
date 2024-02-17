import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      <div
        onClick={() => signOut()}
        className="absolute z-20 top-5 right-8 flex items-center bg-black bg-opacity-70 text-white space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2"
      >
        <Image
          className="rounded-full w-7 h-7"
          src={session?.user?.image ?? ''}
          alt={session?.user?.name ?? ''}
          width={10}
          height={10}
        />
        <p className="text-sm">Logout</p>
        {/* <ChevronDownIcon className='h-5 w-5' /> */}
      </div>
    </div>
  );
};

export default Header;
