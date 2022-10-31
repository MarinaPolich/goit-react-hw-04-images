import { ImageGallery as ImageGalleryBox } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, showImg }) => {
  return (
    <ImageGalleryBox>
      {images.map(({ id, tags, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          tags={tags}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          showImg={showImg}
        ></ImageGalleryItem>
      ))}
    </ImageGalleryBox>
  );
};
