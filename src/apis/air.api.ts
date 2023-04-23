import axios from 'axios';
import type { CITIES, IAIR_API_RESULT } from './air.t';

export const getAirApi = async (city: CITIES): Promise<IAIR_API_RESULT[]> => {
  const response = await axios.get('https://dt-air-data.herokuapp.com/api/air-data', { params: { city } });

  const items: IAIR_API_RESULT[] = response.data;
  return items;
};
