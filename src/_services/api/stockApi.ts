import { Stock } from '@/_domain/entities/entities';
import axios from 'axios';

export const fetchStocks = async (): Promise<Stock[]> => {
    const response = await axios.get('/api/stocks');
    return response.data;
}
