import { Order } from '@/_domain/entities/entities';
import React from 'react';

interface OrderTableProps {
    orders: Order[];
}

const OrderTable: React.FC<OrderTableProps> = ({ orders }) => (
    <table className="min-w-full bg-white">
        <thead>
            <tr>
                <th className="py-2">ID</th>
                <th className="py-2">Stock</th>
                <th className="py-2">Quantity</th>
                <th className="py-2">Price</th>
                <th className="py-2">Type</th>
                <th className="py-2">Status</th>
            </tr>
        </thead>
        <tbody>
            {orders.map((order) => (
                <tr key={order.id}>
                    <td className="py-2">{order.id}</td>
                    <td className="py-2">{order.stockId}</td>
                    <td className="py-2">{order.quantity}</td>
                    <td className="py-2">{order.price}</td>
                    <td className="py-2">{order.type}</td>
                    <td className="py-2">{order.status}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default OrderTable;
