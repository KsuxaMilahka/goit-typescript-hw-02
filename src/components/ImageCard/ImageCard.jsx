import style from './ImageCard.module.css';

const ImageCard = ({ image, onClick }) => {
  return (
    <li className={style.imageCard} onClick={() => onClick(image)}>
      <div>
        <img
          className={style.img}
          src={image.urls.small}
          alt={image.alt_description}
        />
      </div>
    </li>
  );
};

export default ImageCard;
