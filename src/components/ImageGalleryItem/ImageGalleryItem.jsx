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
