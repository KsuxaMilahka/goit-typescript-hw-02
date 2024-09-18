import style from './ImageCard.module.css';
import { ImagesCardProps } from './ImageCard.types';

const ImageCard: React.FC<ImagesCardProps> = ({ image, onClick }) => {
  return (
    <li className={style.imageCard} onClick={() => onClick(image)}>
      <div>
        <img
          className={style.img}
          src={image.urls.small}
          alt={image.alt_description || 'Image'}
        />
      </div>
    </li>
  );
};

export default ImageCard;
