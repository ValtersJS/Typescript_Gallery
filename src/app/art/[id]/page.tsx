/* eslint-disable @next/next/no-img-element */
"use client";

import { getSpecifedArt } from "@/app/api/service";
import { useArtContext } from "@/app/context/ArtProvider";
import { ArtObject } from "@/app/types";
import { useEffect, useState } from "react";

const ArtPiece: React.FC<{ params: { id: string } }> = ({ params }) => {
  const { selectedArt } = useArtContext();
  const objNumberFromPath = params.id.replace(/^en-/, "");
  console.log(objNumberFromPath);

  const [artWork, setArtwork] = useState(selectedArt);

  useEffect(() => {
    const fetchArtwork = async () => {
      if (objNumberFromPath) {
        console.log("data.artObject");
        try {
          const { data } = await getSpecifedArt(objNumberFromPath);
          setArtwork(data?.artObject);
        } catch (err) {
          console.log(err);
        }
      } else {
        setArtwork(selectedArt);
      }
    };

    fetchArtwork();
  }, [objNumberFromPath]);

  return (
    <div className="art-piece p-4 max-w-xs" id={artWork?.id}>
      <img
        src={artWork?.webImage.url}
        // width={500}
        // height={300}
        // layout="responsive"
        alt={artWork?.title}
        // placeholder="blur"
        className="w-full h-auto object-cover rounded-lg shadow-md"
      />
    </div>
    // <div>hello</div>
  );
};

export default ArtPiece;
