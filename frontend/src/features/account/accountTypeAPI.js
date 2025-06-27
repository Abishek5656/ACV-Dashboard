import axios from 'axios';

const API = import.meta.env.VITE_API_BASE_URL;

export const fetchAccountData = async () => {
  const res = await axios.get(`${API}/api/v1/account/all`);
  return res.data;
};