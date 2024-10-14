"use client";

import { useEffect, useState } from "react";
import { getArt } from "../api/service";
import { ArtPieceView } from "./ArtPiece";
import { ArtObject } from "../types";
import { getRandomItems } from "../utils/randomizer";
import Spinner from "../utils/spinner";
import GalleryButton from "./GalleryButton";

const ARTWORK_COUNT = "20";

const Gallery: React.FC = () => {
  const [artworks, setArtworks] = useState<ArtObject[]>([]);
  const [currentArt, setCurrentArt] = useState<ArtObject[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getArtworks = async (count: string) => {
      try {
        setIsLoading(true);
        setError(null);
        const { data, error } = await getArt(count);
        if (error) throw new Error(error);
        setArtworks(data?.artObjects || []);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error(error);
          setError(
            error.message || "Failed to load artworks. Please try again."
          );
        } else {
          console.error("Unexpected error", error);
          setError("Failed to load artworks. Please try again.");
        }
      } finally {
        setIsLoading(false);
      }
    };

    getArtworks(ARTWORK_COUNT);
  }, []);

  // shuffle logic
  const handleClick = () => {
    if (artworks.length > 0) {
      const randomItems = getRandomItems(artworks, 3);
      setCurrentArt(randomItems);
    }
  };

  const renderArt = (artPieces: ArtObject[]) => {
    return artPieces.map((art) => (
      <div
        key={art.id}
        id={art.id}
        className="flex justify-center p-4 w-full sm:w-1/2 md:w-1/2 lg:w-1/4 transition duration-500 ease-in-out hover:scale-110 overflow-hidden"
      >
        <ArtPieceView art={art} />
      </div>
    ));
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="art-container overflow-hidden flex flex-wrap justify-center items-center w-full mx-auto mb-16">
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <div className="text-red-600 text-lg">{error}</div>
        ) : currentArt.length > 0 ? (
          // after initial render and shuffle click, use shuffle logic
          renderArt(currentArt)
        ) : (
          // initally pick first three to prevent setState batching
          renderArt(artworks.slice(0, 3))
        )}
      </div>
      <GalleryButton onClick={handleClick} />
    </div>
  );
};

export default Gallery;
