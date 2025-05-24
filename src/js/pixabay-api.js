import axios from 'axios';
const API_KEY = '50322611-1d4a2dda66e83b148172da45e';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;
export async function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    page: page,
    per_page: PER_PAGE,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch images from Pixabay');
  }
}
