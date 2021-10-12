import { Component } from "react";
import { createPortal } from "react-dom";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import Button from "./components/Button/Button";
import Loader from "./components/Loader";
import Modal from "./components/Modal/Modal";
import { ToastContainer, toast } from "react-toastify";

const modalRoot = document.querySelector("#modal-root");

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    searchQuery: "",
    page: 1,
    bigImg: null,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.getImages();
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

  getImages = () => {
    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.searchQuery}&page=${this.state.page}&key=22945587-13dcce98a35cac559e6949163&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then((resp) => {
        const data = resp.data.hits;
        if (data.length === 0) {
          toast("Уточните критерии поиска!");
        }
        return this.setState((old) => ({
          images: [...old.images, ...data],
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.onCloseModal();
    }
  };

  handleClickOverlay = () => {
    this.onCloseModal();
  };

  onLoadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return createPortal(
      <>
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery
          images={this.state.images}
          onItemClick={this.onItemClick}
        ></ImageGallery>
        {this.state.loading && <Loader />}
        {this.state.images.length > 0 && (
          <Button onLoadMore={this.onLoadMore} />
        )}
        <ToastContainer autoClose={3000} />
        {this.state.bigImg && (
          <Modal
            src={this.state.bigImg}
            onCloseModal={this.onCloseModal}
            handleClickOverlay={this.handleClickOverlay}
          />
        )}
      </>,
      modalRoot
    );
  }
}
