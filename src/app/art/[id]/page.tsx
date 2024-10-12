/* eslint-disable @next/next/no-img-element */
"use client";

import { useArtContext } from "@/app/context/ArtProvider";
import { useEffect } from "react";

const ArtPiece: React.FC = () => {
  const { selectedArt } = useArtContext();
  console.log(selectedArt);

  useEffect(() => {
    if (!selectedArt) {
      /* 

     */
    }
  });

  return (
    <div className="art-piece p-4 max-w-xs" id={selectedArt.id}>
      <img
        src={selectedArt.webImage.url}
        // width={500}
        // height={300}
        // layout="responsive"
        alt={selectedArt.title}
        // placeholder="blur"
        className="w-full h-auto object-cover rounded-lg shadow-md"
      />
    </div>
  );
};

export default ArtPiece;
