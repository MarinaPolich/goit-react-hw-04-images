import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  tags,
  webformatURL,
  largeImageURL,
  showImg,
}) => {
  return (
    <GalleryItem onClick={() => showImg(largeImageURL, tags)}>
      <GalleryImage src={webformatURL} alt={tags} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  showImg: PropTypes.func.isRequired,
};
