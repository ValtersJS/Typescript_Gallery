// type for objects in ArtResponse
export interface ArtObject {
  id: string;
  title: string;
  webImage: {
    url: string;
  };
}

// description fetch type
export interface SpecifiedArt {
  artObject: {
    url: string;
    title: string;
    plaqueDescriptionEnglish: string;
  };
}

// fetch type
export interface ArtResponse {
  artObjects: ArtObject[];
}
