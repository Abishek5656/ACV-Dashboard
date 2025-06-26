
import axios from 'axios';

export const fetchCustomerTypeData = async () => {
  const res = await axios.get('/api/v1/customer');
  return res.data;
};

