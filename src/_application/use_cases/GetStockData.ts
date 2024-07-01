import { IStockService } from '@/_application/ports/IStockService';

export class GetStockData {
    constructor(private stockService: IStockService) { }

    async execute() {
        return await this.stockService.getAllStocks();
    }
}
