import axios, { AxiosError } from 'axios';
import { RouteApiResponse } from '../types/routeTypes';
import { getAccessToken } from '../utils/getAccessToken';

const BASE_URL = 'http://127.0.0.1:3500/north-rift/v1';
type getAllRoutesProps = {
  from?: string;
  destination?: string;
  travelDate?: string;
};

export async function getAllRoutes({ from, destination, travelDate }: getAllRoutesProps) {
  try {
    const res = await axios.get<RouteApiResponse>(`${BASE_URL}/path/list`, {
      headers: {
        authorization: getAccessToken(),
      },

      params: {
        from,
        destination,
        travelDate,
      },
    });

    return res.data.paths;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error('Error fetching routes');
    }
    throw error;
  }
}
