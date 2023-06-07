import axios from 'axios';

const commonUrl = 'http://192.168.0.86:10000/v1/';

export const getShops = () =>
  axios.get(commonUrl + 'shop').then(res => {
    return res.data;
  });
