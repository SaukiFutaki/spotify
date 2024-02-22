
import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";
import { Card,CardContent } from "@/components/ui/card";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  console.log(session?.user);

  return (
    <div className="pt-2 flex-grow">
     <Card className="w-full h-screen border-black bg-[#121212] p-2 rounded-xl ">
      <CardContent>
       
      </CardContent>
     </Card>
    </div>
  );
}
