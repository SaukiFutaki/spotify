import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <>
      <div className="flex items-center justify-center">
        <Button onClick={() => signIn("spotify", { callbackUrl: "/" })}>
          LOGIN EA
        </Button>
      </div>
    </>
  );
}
