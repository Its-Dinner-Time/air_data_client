import axios from 'axios';
import type { CITIES, IAIR_API_RESULT } from './air.t';

export const getAirApi = async (city: CITIES): Promise<IAIR_API_RESULT[]> => {
  const params = {
    serviceKey: '',
    returnType: 'json',
    numOfRows: 100,
    pageNo: 1,
    sidoName: city,
    ver: '1.0',
  };

  const response = await axios.get('', { params });

  const items: IAIR_API_RESULT[] = response.data.response.body.items;
  return items;
};
