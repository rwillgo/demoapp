import axios from 'axios';
import server from '../../constants/config';

export const postCreate = params => {
  const method = 'POST';
  const url = `${server.BASE_URL}/posts/`;
  const headers = {
    'Content-Type': 'application/json',
  };
  const data = params;
  return axios({
    method,
    url,
    data,
    headers,
  });
};

export const postHome = () => {
  const method = 'GET';
  const url = `${server.BASE_URL}/posts/`;
  const headers = {
    'Content-Type': 'application/json',
  };
  return axios({
    method,
    url,
    headers,
  });
};
