/* eslint-disable @next/next/no-img-element */

"use client";
interface ArtPieceViewProps {
  art: ArtObject;
}

import { ArtObject } from "../types";
import { useRouter } from "next/navigation";

export const ArtPieceView: React.FC<ArtPieceViewProps> = ({ art }) => {
  const router = useRouter();
  console.log(art.id);

  const handleClick = () => {
    router.push(`art/${art.id}`);
  };

  return (
    <div className="art-piece p-4 max-w-xs" id={art.id} onClick={handleClick}>
      <img
        src={art.webImage.url}
        alt={art.title}
        className="w-full h-auto object-cover rounded-lg shadow-md"
      />
    </div>
  );
};
