// import axios, { isCancel, AxiosError } from 'axios';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '30234231-b0be7596e264e2dfb6014cc0b';

export const getImages = async (q, page) => {
  const response = await axios.get('', {
    params: {
      key: KEY,
      q,
      page,
      per_page: 12,
      image_type: 'photo',
      orientation: 'horizontal',
    },
  });
  return response.data;
};
