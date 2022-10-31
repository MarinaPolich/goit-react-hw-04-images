import React, { Component } from 'react';
import { AppBox } from './App.styled';
import * as API from '../services/api';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    images: [],
    qry: '',
    page: 1,
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
    if (prevState.page !== page || prevState.qry !== qry) {
      const response = await API.getImages(qry, page);
      this.setState({ images: response.hits });
    }
  }

  render() {
    return (
      <AppBox>
        <Searchbar onSubmit={this.setSearch} />
      </AppBox>
    );
  }
}
