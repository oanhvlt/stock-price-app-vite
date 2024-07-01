import { Stock } from "@/_domain/entities/entities";

export interface IStockService {
    getAllStocks(): Promise<Stock[]>;
    getStockById(id: number): Promise<Stock>;
}
