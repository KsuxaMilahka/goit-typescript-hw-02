import Modal from 'react-modal';
import style from './ImageModal.module.css';

const ImageModal = ({ isOpen, onRequestClose, image }) => (
  <Modal
    className={style.modal}
    isOpen={isOpen}
    onRequestClose={onRequestClose}
  >
    <div className={style.image}>
      <img
        className={style.imageModal}
        src={image.urls.regular}
        alt={image.alt_description}
      />
      <p className={style.text}>Author: {image.user.name}</p>
      <p className={style.text}>Likes: {image.likes}</p>
    </div>
  </Modal>
);

export default ImageModal;
