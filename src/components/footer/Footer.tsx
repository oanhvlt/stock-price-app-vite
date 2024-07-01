import React from 'react';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
    return (
        <div className="bg-gray-800 p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-4">
                <span>Equity: Price: x1000 - Qty: x1</span>
                <span>Derivatives: Price: x1 - Qty: x1</span>
            </div>
            <div className="flex items-center space-x-4">
                <Button className="bg-transparent hover:bg-gray-600">OTP</Button>
                <Button className="bg-transparent hover:bg-gray-600">Asset</Button>
                <Button className="bg-transparent hover:bg-gray-600">Order history</Button>
                <Button className="bg-transparent hover:bg-gray-600">Order book</Button>
                <Button className="bg-red-500 hover:bg-red-700">ORDER</Button>
            </div>
        </div>
    );
};

export default React.memo(Footer);
