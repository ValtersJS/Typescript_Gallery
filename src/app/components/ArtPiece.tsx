interface ArtPieceViewProps {
  art: ArtObject;
}

import { ArtObject } from "../types";

export const ArtPieceView: React.FC<ArtPieceViewProps> = ({ art }) => {
  return (
    <div className="art-piece" id={art.id}>
      <img src={art.webImage.url} alt={art.title} />
      <h2>{art.title}</h2>
    </div>
  );
};
