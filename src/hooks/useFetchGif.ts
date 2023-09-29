import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { Image } from "../models/image.interface";
import { ImageProps } from '../models/imageProps.interface';

export const useFetchGif = ( category: string): ImageProps => {

    const [images, setImages] = useState<Image[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getImages = async(): Promise<void> => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect(() => {
        getImages(),
        setIsLoading(false)
    }, [])
  
    return {
        images,
        isLoading
    };
}
