import { Component } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button/Button";
import Loader from "./components/Loader";
import Modal from "./components/Modal/Modal";
import getImages from "./services/api";

const modalRoot = document.querySelector("#modal-root");

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    searchQuery: "",
    page: 1,
    bigImg: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      getImages(this.state.searchQuery, this.state.page).then((newImages) => {
        if (newImages.length)
          this.setState((old) => ({
            images: [...old.images, ...newImages],
          }));
      });
    }
    if (this.state.page > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  onSubmit = (searchQuery) => {
    if (this.state.searchQuery !== searchQuery) {
      this.setState({ searchQuery, images: [], page: 1 });
    }
  };

  onCloseModal = () => {
    this.setState({ bigImg: null });
  };

  onItemClick = (largeImageURL) => {
    this.setState({ bigImg: largeImageURL });
  };

  onLoadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery
          images={this.state.images}
          onItemClick={this.onItemClick}
        />
        {this.state.loading && <Loader />}
        {this.state.images.length > 0 && (
          <Button onLoadMore={this.onLoadMore} />
        )}
        <ToastContainer autoClose={3000} />
        {this.state.bigImg && (
          <Modal
            src={this.state.bigImg}
            onCloseModal={this.onCloseModal}
            modalRoot={modalRoot}
          />
        )}
      </>
    );
  }
}
