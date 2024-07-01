import { Order } from '@/_domain/entities/entities';
import axios from 'axios';

export const placeOrder = async (order: Order): Promise<Order> => {
    const response = await axios.post('/api/orders', order);
    return response.data;
}
