import axios from 'axios';

export const fetchAccountData = async () => {
  const res = await axios.get('/api/v1/account/all');
  return res.data;
};
