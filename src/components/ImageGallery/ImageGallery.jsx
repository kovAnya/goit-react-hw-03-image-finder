import * as SC from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, onImgClick }) => {
  return (
    <SC.ImageGallery>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            url={image.webformatURL}
            bigImg={image.largeImageURL}
            onClick={onImgClick}
          />
        );
      })}
    </SC.ImageGallery>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onImgClick: PropTypes.func.isRequired,
};
