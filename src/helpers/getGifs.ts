import { Image } from "../models/image.interface";

export const getGifs = async(category: string): Promise<Image[]> => {
    const keyApi = `RSCVTxWUTkDB12XvjrrmfNvn8HBVsk25`;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${keyApi}&q=${category}&limit=10`;
    const response = await fetch(url);
    const { data } = await response.json();
    return data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
      })
    );
  }