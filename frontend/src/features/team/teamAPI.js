import axios from 'axios';

export const fetchTeamData = async () => {
  const res = await axios.get('/api/v1/team/all');
  return res.data;
};

