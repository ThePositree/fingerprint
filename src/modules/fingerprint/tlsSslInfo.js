import axios from 'axios';

export default async () => {
  try {
    const { data } = await axios.get('https://www.howsmyssl.com/a/check');
    return data;
  } catch (error) {
    return undefined;
  }
};
