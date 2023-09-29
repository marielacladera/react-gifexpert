import { Image } from "../models/image.interface";

export const GifItem = ({ image } : { image: Image}): JSX.Element => {

  return (
    <div className="card">
      <img src = { image.url } alt = { image.title } />
      <p>{ image.title }</p>
    </div>
  )
}
