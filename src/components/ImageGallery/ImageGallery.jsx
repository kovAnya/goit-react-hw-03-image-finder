import * as SC from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <SC.ImageGallery>
      {images.map(image => {
        return <ImageGalleryItem key={image.id} url={image.webformatURL} />;
      })}
    </SC.ImageGallery>
  );
};
