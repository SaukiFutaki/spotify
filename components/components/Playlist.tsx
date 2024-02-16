import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface DetailPlaylist {
  name: string;
  image?: any;
  type?: string;
  owner: string;
  track? : any
}

export default function DetailPlaylist({
  name,
  image,
  type,
  owner,
  track
}: DetailPlaylist) {
  return (
    <div>
      <Card className="w-full h-screen border-black bg-[#121212] p-2">
        <CardContent>
          <div className="flex flex-row gap-2">
            <Image src={image} alt={name} width={200} height={200} />
            <div className="flex flex-col">
              <h1 className="">{type}</h1>
              <h1 className="text-3xl font-bold">{name}</h1>
              <h1>{owner}</h1>
            </div>
          </div>
              <h1>{track}</h1>
        </CardContent>
      </Card>
    </div>
  );
}
