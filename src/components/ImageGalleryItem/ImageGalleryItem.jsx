import * as SC from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ url }) => {
  return (
    <SC.ImageGalleryItem>
      <SC.ImageGalleryItemImage src={url} alt="" />
    </SC.ImageGalleryItem>
  );
};
