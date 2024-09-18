import Modal from 'react-modal';
import style from './ImageModal.module.css';
import { ImageModalProps } from './ImageModal.types';

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  image,
}) => (
  <Modal
    className={style.modal}
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    appElement={document.getElementById('root') || undefined}
    ariaHideApp={false}
  >
    <div className={style.image}>
      <img
        className={style.imageModal}
        src={image.urls.regular}
        alt={image.alt_description || 'Image'}
      />
      <p className={style.text}>Author: {image.user.name}</p>
      <p className={style.text}>Likes: {image.likes}</p>
    </div>
  </Modal>
);

export default ImageModal;
