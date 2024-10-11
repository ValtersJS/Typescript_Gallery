import { useState } from "react";
import { getArt } from "../api/service";
import { ArtPieceView } from "./ArtPiece";
import { ArtObject } from "../types";

const Gallery: React.FC = async () => {
  const {
    data: artworks,
    error,
  }: { data: ArtObject | null; error: string | null } = await getArt();

  return (
    <div>
      {/* // possibly null */}
      {artworks?.artObjects.map((art) => (
        <ArtPieceView art={art} />
      ))}
    </div>
  );
};

export default Gallery;
