import { Image } from '../../App/App.types';

export interface ImagesGalleryProps {
  images: Image[];
  onClick: (image: Image) => void;
}
