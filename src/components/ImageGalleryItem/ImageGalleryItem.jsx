import * as SC from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ url, onClick, bigImg }) => {
  return (
    <SC.ImageGalleryItem>
      <SC.ImageGalleryItemImage
        src={url}
        alt=""
        onClick={onClick}
        data-bigimg={bigImg}
      />
    </SC.ImageGalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  bigImg: PropTypes.string.isRequired,
};
