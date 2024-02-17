import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DetailPlaylist {
  name: string;
  image?: any;
  type?: string;
  owner: string;
  track?: any;
  album? : string
  durasi? : string | number
  release? : string

}

export default function DetailPlaylist({
  name,
  image,
  type,
  owner,
  track,
  album,
  durasi,
  release
}: DetailPlaylist) {
  return (
    <div>
      <Card className="w-full h-screen border-black bg-[#121212] p-2 overflow-y-auto ">
        <CardContent>
          <div className="flex flex-row gap-2">
            <Image src={image} alt={name} width={200} height={200} />
            <div className="flex flex-col">
              <h1 className="">{type}</h1>
              <h1 className="text-3xl font-bold">{name}</h1>
              <h1>{owner}</h1>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>#</TableHead>
                <TableHead>Judul</TableHead>
                <TableHead>Album</TableHead>
                <TableHead>Tanggal Ditambahkan</TableHead>
                <TableHead>Durasi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {track?.map((item: string, index: number) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell className="line-clamp-1">{item}</TableCell>
                    <TableCell>{album}</TableCell>
                    <TableCell>{release}</TableCell>
                    <TableCell>{durasi}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
