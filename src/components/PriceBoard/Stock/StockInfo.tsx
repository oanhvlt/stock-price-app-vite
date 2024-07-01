import { Stock } from '@/_domain/entities/entities';

interface StockInfoProps {
    stock: Stock;
}

const StockInfo: React.FC<StockInfoProps> = ({ stock }) => (
    <div className="p-4 border rounded">
        <h2 className="text-xl font-bold">{stock.name}</h2>
        <p>Bid Volume: {stock.bidVolume}</p>
        <p>Ask Volume: {stock.askVolume}</p>
        <p>Ceiling Price: {stock.ceilingPrice}</p>
        <p>Floor Price: {stock.floorPrice}</p>
        <p>Current Price: {stock.currentPrice}</p>
        <p>Change: {stock.change}</p>
    </div>
);

export default StockInfo;
