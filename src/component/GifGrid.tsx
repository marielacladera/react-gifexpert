import { GifItem } from "./GifItem";
import { useFetchGif } from "../hooks/useFetchGif";
import { Image } from "../models/image.interface";

export const GifGrid = ({ category, deleteCategory } : { category: string, deleteCategory: (value: string) => void }): JSX.Element => {

  const { images, isLoading }: { images: Image[], isLoading: boolean } = useFetchGif(category);

  const onDelete = (): void => {
    deleteCategory(category);
  }

  return (
    <>
      <div className="category">
        <h3>{ category }</h3>
        <button onClick = { onDelete }>Delete Category</button>
      </div>
      <div className="card-grid">
        {
          isLoading && (<h2>Cargando...</h2>)
        }
        {
          images.map((image: Image) => (
            <GifItem key = { image.id } image = { image }/>
            
          ))
        }
      </div>
    </>
  )
}
