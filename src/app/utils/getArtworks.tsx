export const getArtworks = async (count: string) => {
  try {
    setIsLoading(true);
    const { data, error } = await getArt(count);
    if (error) throw new Error(error);
    setArtworks(data?.artObjects);
  } catch (error) {
    setError(
      error instanceof Error ? error.message : "An unexpected error occurred"
    );
    console.error(error);
  } finally {
    setIsLoading(false);
  }
};
