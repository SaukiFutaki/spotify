import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  console.log(session?.user);

  return (
    <div className="pt-2 flex-grow scrollbar-hide">
      <div className="sticky top-0">
        <Header />
      </div>
      <Card className="w-full h-screen border-black bg-[#121212] p-2 rounded-xl overflow-hidden">
        <CardContent></CardContent>
      </Card>
    </div>
  );
}
