export interface ArtObject {
  id: string;
  title: string;
  webImage: {
    url: string;
  };
}

export interface SpecifiedArt {
  url: string;
  description: string;
}

export interface ArtResponse {
  artObjects: ArtObject[];
}
