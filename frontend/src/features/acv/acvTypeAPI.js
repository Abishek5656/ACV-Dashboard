
import axios from 'axios';

export const fetchCustomerACV = async () => {
  const res = await axios.get('/api/v1/acv/all'); // Only relative path
  return res.data;
};

