import axios from 'axios';

export default async () => {
  try {
    const { data } = await axios.get('https://api.db-ip.com/v2/free/self');
    return data;
  } catch (error) {
    return undefined;
  }
};
