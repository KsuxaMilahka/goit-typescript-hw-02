import ImageCard from '../ImageCard/ImageCard.js';
import style from './ImageGallery.module.css';
import { ImagesGalleryProps } from './ImageGallery.types.js';

const ImageGallery: React.FC<ImagesGalleryProps> = ({ images, onClick }) => {
  return (
    <ul className={style.imageGallery}>
      {images.map(image => (
        <ImageCard key={image.id} image={image} onClick={onClick} />
      ))}
    </ul>
  );
};

export default ImageGallery;
