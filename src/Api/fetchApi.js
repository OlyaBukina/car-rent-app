import axios from 'axios';

axios.defaults.baseURL = 'https://650842ad56db83a34d9c046e.mockapi.io/api/';

export const getAllAdverts = async page => {
  try {
    return await axios.get(`adverts?`, {
      params: {
        page,
        limit: 8,
      },
    });
  } catch (error) {
    throw new Error('Oops, something goes wrong!');
  }
};
