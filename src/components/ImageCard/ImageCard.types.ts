import { Image } from '../../App/App.types';

export interface ImagesCardProps {
  image: Image;
  onClick: (image: Image) => void;
}
