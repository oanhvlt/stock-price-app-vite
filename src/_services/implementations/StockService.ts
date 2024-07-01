
import { Stock } from '@/_domain/entities/entities';
import { fetchStocks } from '../api/stockApi';
import { IStockService } from '@/_application/ports/IStockService';

export class StockService implements IStockService {
    getStockById(id: number): Promise<Stock> {
        throw new Error('Method not implemented.');
    }
    async getAllStocks(): Promise<Stock[]> {
        return await fetchStocks();
    }
}
