import axios from 'axios';
import PropTypes from 'prop-types';

axios.defaults.baseURL = 'https://pixabay.com/api';
const APIKEY = '30134727-fca765f7bf10fdaddeb4af19e';

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

export const fetchImages = async (query, page) => {
  const responce = await axios.get(
    `/?q=${query}&page=${page}&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return responce.data;
};

fetchImages.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
