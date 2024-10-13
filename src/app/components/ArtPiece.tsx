/* eslint-disable @next/next/no-img-element */
"use client";

interface ArtPieceViewProps {
  art: ArtObject;
}

import { ArtObject } from "../types";
import { useRouter } from "next/navigation";
import { useArtContext } from "../context/ArtProvider";

export const ArtPieceView: React.FC<ArtPieceViewProps> = ({ art }) => {
  const router = useRouter();
  const { setSelectedArt } = useArtContext();

  const handleClick = () => {
    setSelectedArt(art);
    router.push(`/art/${art.id}`);
  };

  return (
    <div className="art-piece p-4 max-w-xs" id={art.id} onClick={handleClick}>
      <img
        src={art.webImage.url}
        // width={500}
        // height={300}
        // layout="responsive"
        alt={art.title}
        // placeholder="blur"
        className="w-full h-auto object-cover rounded-lg shadow-md"
      />
    </div>
  );
};
