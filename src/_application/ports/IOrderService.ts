import { Order } from "@/_domain/entities/entities";

export interface IOrderService {
    placeOrder(order: Order): Promise<Order>;
    getOrderById(id: number): Promise<Order>;
    getAllOrders(): Promise<Order[]>;
    cancelOrder(id: number): Promise<void>;
}
