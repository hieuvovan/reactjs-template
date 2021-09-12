import axios from 'axios';

axios.defaults.baseURL = 'https://vast-lowlands-08945.herokuapp.com/api/v1';

export const convertUrl = (uri: string[]) => {
  return `/${uri.join('/')}`;
}

export const postAPI = (uri: string[]) => {
  return axios.post(convertUrl(uri));
}

export const getApi = (uri: string[]) => {
  return axios.get(convertUrl(uri));
}

export const postApi = (uri: string[], body: any) => {
  return axios.post(convertUrl(uri), body);
}

export const putApi = (uri: string[], body?: any) => {
  return axios.put(convertUrl(uri), body);
}

export const deleteApi = (uri: string[]) => {
  return axios.delete(convertUrl(uri));
}
