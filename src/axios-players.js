import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://catan-cahoots.firebaseio.com/'
});

export default instance;