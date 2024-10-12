"use client";

import { useEffect, useState } from "react";
import { getArt } from "../api/service";
import { ArtPieceView } from "./ArtPiece";
import { ArtObject } from "../types";
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
  const [hasFetchedMore, setHasFetchedMore] = useState(false);

  // initial minimal fetch for only currently needed art pieces
  useEffect(() => {
    getArtworks("3");
  }, []);

  // sets initial art pieces and fetches more for shuffle in the background once.
  useEffect(() => {
    if (artworks.length > 0 && !hasFetchedMore) {
      setCurrentArt(artworks);
      getArtworks("12");
      // prevent effect running more than once
      setHasFetchedMore(true);
    }
  }, [artworks, hasFetchedMore]);

  // shuffle logic
  const getRandomItems = (array: ArtObject[], count: number) => {
    const randomIndexes: number[] = [];
    while (randomIndexes.length < count) {
      const randomIndex = Math.floor(Math.random() * array.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    return randomIndexes.map((index) => array[index]);
  };

  const getArtworks = async (count: string) => {
    try {
      setIsLoading(true);
      const { data, error } = await getArt(count);
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
    setCurrentArt(getRandomItems(artworks, 3));
  };

  return (
    <div className="art-container flex content-center items-stretch place-content-center bg-blue-500">
      {/* // check for empty */}
      {currentArt.map((art) => (
        <div key={art.id} className="bg-green-50 place-content-center">
          <ArtPieceView art={art} />
        </div>
      )) || <div>No artworks</div>}
      <Button handleClick={handleClick} />
    </div>
  );
};

export default Gallery;
