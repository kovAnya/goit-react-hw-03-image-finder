import * as SC from './Searchbar.styled';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  return (
    <SC.Searchbar>
      <SC.SearchForm onSubmit={onSubmit}>
        <SC.SearchFormButton type="submit">
          <SC.SearchFormButtonLabel>Search</SC.SearchFormButtonLabel>
        </SC.SearchFormButton>
        <SC.SearchFormInput
          name="search"
          type="text"
          autocomplete="off"
          placeholder="Search images and photos"
        />
      </SC.SearchForm>
    </SC.Searchbar>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
