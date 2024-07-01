import { Order } from '@/_domain/entities/entities';
import React, { useState } from 'react';

interface BuySellFormProps {
    onSubmit: (order: Order) => void;
}

const BuySellForm: React.FC<BuySellFormProps> = ({ onSubmit }) => {
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [type, setType] = useState<'buy' | 'sell'>('buy');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const order: Order = { id: Date.now(), userId: 1, stockId: 1, quantity, price, type, status: 'pending' };
        onSubmit(order);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded">
            <div>
                <label>Quantity:</label>
                <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
            </div>
            <div>
                <label>Price:</label>
                <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} />
            </div>
            <div>
                <label>Type:</label>
                <select value={type} onChange={(e) => setType(e.target.value as 'buy' | 'sell')}>
                    <option value="buy">Buy</option>
                    <option value="sell">Sell</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default BuySellForm;
