"use client";

import { getSpecifedArt } from "@/app/api/service";
import { useArtContext } from "@/app/context/ArtProvider";
import { SpecifiedArt } from "@/app/types";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingError from "@/app/components/LoadingError";
import ArtPieceDescrption from "@/app/components/ArtPieceDescription";

const ArtPiece: React.FC<{ params: { id: string } }> = ({ params }) => {
  // unnecessary context
  const { selectedArt } = useArtContext();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const objNumberFromPath = params.id.replace(/^en-/, "");

  const [artWork, setArtwork] = useState<SpecifiedArt | null>(null);

  useEffect(() => {
    const fetchArtwork = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // always runs fetch
        if (objNumberFromPath) {
          const { data } = await getSpecifedArt(objNumberFromPath);
          setArtwork(data?.artObject || null);

          // unnecessary optimization with context due to api endpoint restrictions
        } else {
          setArtwork(selectedArt || null);
          console.log(selectedArt);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load artwork.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchArtwork();
  }, [objNumberFromPath, selectedArt]);

  return (
    <>
      <LoadingError isLoading={isLoading} error={error} />
      <ArtPieceDescrption artWork={artWork} router={router} />
    </>
  );
};

export default ArtPiece;
