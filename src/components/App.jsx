import { useEffect, useState } from 'react';
import { AppBox, BoxBtn } from './App.styled';
import * as API from '../services/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export const App = () => {
  const [images, setImages] = useState([]);
  const [qry, setQry] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [current, setCurrent] = useState(null);
  const [error, setError] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  const searcQry = gry => {
    setQry(gry);
    setImages([]);
    setPage(1);
    setError(false);
    setTotalItems(0);
  };

  useEffect(() => {
    const fetch = async () => {
      if (qry !== '') {
        setIsLoading(true);
        setError(false);

        try {
          const response = await API.getImages(qry, page);
          setImages(prevState => [...prevState, ...response.hits]);
          setTotalItems(response.totalHits);
          setIsLoading(false);
        } catch (error) {
          setError(true);
          console.log('error :>> ', error);
        }
      }
    };
    fetch();
  }, [qry, page]);

  const loadMore = () => setPage(prevState => prevState + 1);

  const showImg = (url, alt) => {
    setCurrent({ url, alt });
  };

  const closeImg = () => {
    setCurrent(null);
  };

  return (
    <AppBox>
      <Searchbar onSubmit={searcQry} />
      {error && <p>Sorry... Page Not Found</p>}
      <ImageGallery images={images} showImg={showImg} />
      <BoxBtn>
        {isLoading && <Loader />}
        {images.length > 0 && images.length < totalItems && (
          <Button onClick={loadMore} />
        )}
      </BoxBtn>
      {!!current && (
        <Modal src={current.url} alt={current.alt} onClose={closeImg} />
      )}
    </AppBox>
  );
};
