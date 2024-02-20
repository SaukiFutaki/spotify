import { Card } from "@/components/ui/card";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useState } from "react";

export default function User() {
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

  const { data: user, error } = useSWR(
    id ? `https://api.spotify.com/v1/users/${id}` : null,
    fetcher
  );



  if (!user) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  console.log(user);

  return (
    <div className="pt-2">
     {user.display_name}
    </div>
  );
}
