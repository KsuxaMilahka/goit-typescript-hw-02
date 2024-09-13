import ImageCard from '../ImageCard/ImageCard.jsx';
import style from './ImageGallery.module.css';

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={style.imageGallery}>
      {images.map(image => (
        <ImageCard key={image.id} image={image} onClick={onClick} />
      ))}
    </ul>
  );
};

export default ImageGallery;
