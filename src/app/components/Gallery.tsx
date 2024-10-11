"use client";

import { useEffect, useState } from "react";
import { getArt } from "../api/service";
import { ArtPieceView } from "./ArtPiece";
import { ArtObject, ArtResponse } from "../types";
import { Button } from "./Button";

const Gallery: React.FC = () => {
  // const {
  //   data: artworks,
  //   error,
  // }: { data: ArtResponse | null; error: string | null } = await getArt();

  const [artworks, setArtworks] = useState<ArtObject[]>([]);
  const [currentArt, setCurrentArt] = useState<ArtObject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getArtworks();
  }, []);

  // for secondary fetch after initial 3 art pieces
  useEffect(() => {});

  const getArtworks = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await getArt();
      if (error) throw new Error(error);
      setArtworks(data?.artObjects || []);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unexpected error occurred"
      );
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = () => {
    getArtworks();
  };

  return (
    <div className="art-container flex content-center items-stretch place-content-center bg-blue-500">
      {/* // check for empty */}
      {artworks.slice(0, 3).map((art) => (
        <div className="bg-green-50 place-content-center">
          <ArtPieceView key={art.id} art={art} />
        </div>
      )) || <div>No artworks</div>}

      <Button handleClick={handleClick} />
    </div>
  );
};

export default Gallery;
