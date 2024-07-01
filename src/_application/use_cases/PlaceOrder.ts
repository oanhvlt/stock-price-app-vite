import { Order } from '@/_domain/entities/entities';
import { IOrderService } from '@/_application/ports/IOrderService';

export class PlaceOrder {
    constructor(private orderService: IOrderService) { }

    async execute(order: Order) {
        return await this.orderService.placeOrder(order);
    }
}
