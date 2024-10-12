"use client";

import { createContext, useContext, useState } from "react";
import { ArtObject } from "../types";

interface Props {
  children: React.ReactNode;
}

interface ArtContextType {
  selectedArt: ArtObject | undefined;
  setSelectedArt: React.Dispatch<React.SetStateAction<ArtObject | undefined>>;
}

const ArtContext = createContext<ArtContextType | undefined>(undefined);

export const ArtProvider: React.FC<Props> = ({ children }) => {
  const [selectedArt, setSelectedArt] = useState<ArtObject | undefined>();

  return (
    <ArtContext.Provider value={{ selectedArt, setSelectedArt }}>
      {children}
    </ArtContext.Provider>
  );
};

export const useArtContext = () => {
  const context = useContext(ArtContext);
  if (context === undefined) {
    throw new Error("useArtContext must be used within an ArtProvider");
  }
  return context;
};
