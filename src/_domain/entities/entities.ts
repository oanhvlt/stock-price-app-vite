export interface Order {
    id: number;
    userId: number;
    stockId: number;
    quantity: number;
    price: number;
    type: 'buy' | 'sell';
    status: 'pending' | 'completed' | 'cancelled';
}
export interface Stock {
    id: number;
    name: string;
    bidVolume: number;
    askVolume: number;
    ceilingPrice: number;
    floorPrice: number;
    currentPrice: number;
    change: number;
}
export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
}
