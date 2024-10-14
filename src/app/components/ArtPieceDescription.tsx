import Image from "next/image";
import { SpecifiedArt } from "../types";
import { useRouter } from "next/navigation";

interface ArtPieceDetailsProps {
  artWork: SpecifiedArt | null;
  router: ReturnType<typeof useRouter>;
}

const ArtPieceDescrption: React.FC<ArtPieceDetailsProps> = ({
  artWork,
  router,
}) => {
  if (!artWork) return null;

  return (
    <div className="flex flex-col items-center justify-center p-6 max-w-3xl mx-auto">
      <button
        className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out border border-gray-600"
        onClick={() => router.push("/")}
      >
        <span className="text-xl font-serif">Back to Gallery</span>
      </button>
      <div className="art-piece p-4 w-full">
        <Image
          src={artWork.webImage.url}
          priority
          width={500}
          height={500}
          alt={artWork.title}
          className="w-full h-auto object-cover rounded-lg shadow-lg border-2 border-gray-200"
        />
      </div>
      <p className="mt-4 text-gray-700 text-lg text-center">
        <span className="font-bold">{artWork.title}</span>
        <span className="block">
          {artWork.plaqueDescriptionEnglish || "Description not available."}
        </span>
      </p>
    </div>
  );
};

export default ArtPieceDescrption;
