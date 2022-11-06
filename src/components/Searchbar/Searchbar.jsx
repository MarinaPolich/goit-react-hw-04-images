import { FiSearch } from 'react-icons/fi';
import PropTypes from 'prop-types';
import {
  SearchbarBox,
  SearchForm,
  SearchFormInput,
  SearchFormButton,
  SearchFormButtonLabel,
} from './Searchbar.styled';
import { useState } from 'react';

export const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
  };

  const handleChange = e => {
    setValue(e.target.value);
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
          value={value}
          onChange={handleChange}
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
