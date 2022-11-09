import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { fetchImages } from './API/Api';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import * as SC from './App.styled';

export class App extends React.Component {
  state = {
    images: [],
    searchValue: '',
    page: 0,
    pagesLoadMore: 0,
    isLoading: false,
    largeImgUrl: '',
  };

  onSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.search.value;
    this.setState({
      searchValue: query,
      page: 1,
      images: [],
    });

    form.reset();
  };

  onImgClick = evt => {
    const largeImgUrl = evt.target.dataset.bigimg;
    this.setState({ largeImgUrl });
  };

  onCloseModal = () => {
    this.setState({ largeImgUrl: '' });
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
      const results = await fetchImages(
        this.state.searchValue,
        this.state.page
      );

      const pages = Math.ceil(results.totalHits / 12);
      this.setState({
        images: [...this.state.images, ...results.hits],
        pagesLoadMore: pages,
      });
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
        <ImageGallery images={this.state.images} onImgClick={this.onImgClick} />
        {this.state.page < this.state.pagesLoadMore && (
          <Button onClick={this.loadmore} />
        )}
        {this.state.largeImgUrl.length > 0 && (
          <Modal onClose={this.onCloseModal}>
            <img src={this.state.largeImgUrl} alt="" />
          </Modal>
        )}
      </SC.App>
    );
  }
}
