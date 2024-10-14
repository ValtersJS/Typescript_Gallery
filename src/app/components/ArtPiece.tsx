/* eslint-disable @next/next/no-img-element */
"use client";

interface ArtPieceViewProps {
  art: ArtObject;
}

import { ArtObject } from "../types";
import { useRouter } from "next/navigation";
import { useArtContext } from "../context/ArtProvider";
import Image from "next/image";

export const ArtPieceView: React.FC<ArtPieceViewProps> = ({ art }) => {
  const router = useRouter();
  const { setSelectedArt } = useArtContext();

  // go to dynamic url of artwork
  const handleClick = () => {
    setSelectedArt(art);
    router.push(`/art/${art.id}`);
  };

  return (
    <div className="relative p-4 cursor-pointer" onClick={handleClick}>
      <Image
        src={art.webImage.url}
        alt={art.title}
        loading="lazy"
        width={500}
        height={500}
        className="transition-transform duration-300 hover:scale-125 rounded-lg shadow-md"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNcWQ8AAdcBKrJda2oAAAAASUVORK5CYII="
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
        <span className="text-white text-lg font-serif font-bold">
          {art.title}
        </span>
      </div>
    </div>
  );
};
