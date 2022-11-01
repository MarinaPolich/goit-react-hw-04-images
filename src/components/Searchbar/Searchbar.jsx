import { FiSearch } from 'react-icons/fi';
import PropTypes from 'prop-types';
import {
  SearchbarBox,
  SearchForm,
  SearchFormInput,
  SearchFormButton,
  SearchFormButtonLabel,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.currentTarget.elements.qry.value);
  };
  return (
    <SearchbarBox>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <FiSearch />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          name="qry"
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarBox>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
