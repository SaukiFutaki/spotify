import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FaSpotify } from "react-icons/fa";

export default function Login() {
  return (
    <>
      <div className="flex items-center justify-center">
        <Button onClick={() => signIn("spotify", { callbackUrl: "/" })}>
          <FaSpotify className="text-green-400 text-3xl"/>
        </Button>
      </div>
    </>
  );
}
