import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchCustomerACV = async () => {
  const res = await axios.get(`${API_BASE_URL}/api/v1/acv/all`);
  return res.data;
};