interface ArtPieceViewProps {
  art: ArtObject;
}

import { ArtObject } from "../types";

export const ArtPieceView: React.FC<ArtPieceViewProps> = ({ art }) => {
  return (
    <div className="art-piece p-4 max-w-xs" id={art.id}>
      <img
        src={art.webImage.url}
        alt={art.title}
        className="w-full h-auto object-cover rounded-lg shadow-md"
      />
      {/* <h2>{art.title}</h2> */}
    </div>
  );
};
