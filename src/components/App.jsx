import React, { Component } from 'react';
import { AppBox, BoxBtn } from './App.styled';
import * as API from '../services/api';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    qry: '',
    page: 1,
    isLoading: false,
    current: null,
  };

  setSearch = qry => {
    this.setState({
      qry,
      images: [],
      page: 1,
    });
  };

  async componentDidUpdate(_, prevState) {
    const { qry, page } = this.state;
    if (qry !== '' && (prevState.page !== page || prevState.qry !== qry)) {
      this.setState({ isLoading: true });
      const response = await API.getImages(qry, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...response.hits],
        isLoading: false,
      }));
    }
  }

  loadMore = () =>
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));

  showImg = (url, alt) => {
    this.setState({
      current: { url, alt },
    });
  };

  closeImg = () => {
    this.setState({ current: null });
  };

  render() {
    const { images, isLoading, current } = this.state;
    return (
      <AppBox>
        <Searchbar onSubmit={this.setSearch} />
        <ImageGallery images={images} showImg={this.showImg} />
        <BoxBtn>
          {isLoading && <Loader />}
          {images.length > 0 && <Button onClick={this.loadMore} />}
        </BoxBtn>
        {!!current && (
          <Modal src={current.url} alt={current.alt} onClose={this.closeImg} />
        )}
      </AppBox>
    );
  }
}
