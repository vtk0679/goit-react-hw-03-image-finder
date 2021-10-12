import s from "./SearchBar.module.css";
import PropTypes from "prop-types";
import { Component } from "react";

export default class SearchBar extends Component {
  state = {
    searchQuery: "",
  };

  onInputChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  onSubmit = (e) => {
    const searchQuery = this.state.searchQuery;
    e.preventDefault();
    if (searchQuery.trim() === "") {
      return;
    }
    this.props.onSubmit(searchQuery.toLowerCase());
  };

  render() {
    return (
      <>
        <header className={s.SearchBar}>
          <form className={s.SearchForm} onSubmit={this.onSubmit}>
            <button type="submit" className={s.SearchFormButton}>
              <span className={s.SearchFormButtonLabel}>Search</span>
            </button>

            <input
              className={s.SearchFormInput}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.onInputChange}
            />
          </form>
        </header>
      </>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
