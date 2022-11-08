import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import api from './API/Api';
import { Loader } from './Loader/Loader';
import * as SC from './App.styled';

export class App extends React.Component {
  state = {
    images: [],
    searchValue: '',
    page: 1,
    isLoading: false,
  };

  onSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.search.value;
    this.setState({
      searchValue: query,
      page: 1,
    });

    form.reset();
    // this.apiSearch(query, startPage);
  };

  loadmore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchValue === this.state.searchValue &&
      prevState.page === this.state.page
    ) {
      return;
    }
    this.setState({ isLoading: true });
    try {
      const results = await api.fetchImages(
        this.state.searchValue,
        this.state.page
      );
      if (this.state.page === 1) {
        this.setState({ images: [...results.hits] });
      } else this.setState({ images: [...prevState.images, ...results.hits] });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <SC.App>
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.isLoading && <Loader />}
        <ImageGallery images={this.state.images} />
        {this.state.images.length > 0 && <Button onClick={this.loadmore} />}
      </SC.App>
    );
  }
}
