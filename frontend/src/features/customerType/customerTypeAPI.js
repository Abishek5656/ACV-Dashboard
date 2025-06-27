import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchCustomerTypeData = async () => {
  const res = await axios.get(`${API_BASE_URL}/api/v1/customer`);
  return res.data;
};