import { ArtObject, ArtResponse, SpecifiedArt } from "../types";

const API_KEY = "ZWRoomdB";
const BASE_URL = "https://www.rijksmuseum.nl/api/en/collection";

async function fetchData<T>(
  url: string
): Promise<{ data: T | null; error: string | null }> {
  try {
    const res = await fetch(`${BASE_URL}${url}`);
    if (!res.ok) {
      if (res.status === 404) throw new Error("404, Not found");
      if (res.status === 500) throw new Error("500, internal server error");
      throw new Error(res.statusText);
    }
    const data = await res.json();

    return { data, error: null };
  } catch (error) {
    console.error("Fetch", error);
    return { data: null, error: "unexpected error" };
  }
}

export const getArt = async (
  imgCount: string
): Promise<{
  data: ArtResponse | null;
  error: string | null;
}> => {
  return fetchData<ArtResponse>(`?key=${API_KEY}&ps=${imgCount}&imgonly=true`);
};

export const getSpecifedArt = async (
  objNumber: string
): Promise<{
  data: SpecifiedArt | null;
  error: string | null;
}> => {
  // type
  return fetchData(`/${objNumber}?key=${API_KEY}`);
};
