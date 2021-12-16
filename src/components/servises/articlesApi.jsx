import axios from 'axios';

const BASE_URL = `https://pixabay.com/api/`;
const API_KEY = `24480500-399700875c121f80bab96d725`;
axios.defaults.baseURL = BASE_URL;

const fetchData = async (image, page = 1) => {
  const queryOptions = new URLSearchParams({
    key: API_KEY,
    q: image,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page,
  });
  try {
    const { data } = await axios.get('?' + queryOptions.toString());
    return data;
  } catch (error) {
    throw error;
  }
};
export default fetchData;

//    return axios
//     .get(`https://pixabay.com/api/?q=${searchQuery}&page=1&key=24480500-399700875c121f80bab96d725&image_type=photo&orientation=horizontal&per_page=12`)
//    .then(response => response.data.hits);
//  };

// export default fetchData;

// `https://pixabay.com/api/?q=${searchQuery}&page=1&key=24480500-399700875c121f80bab96d725&image_type=photo&orientation=horizontal&per_page=12`
