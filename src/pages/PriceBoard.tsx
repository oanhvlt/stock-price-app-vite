import React, { useEffect, useState } from 'react';
import { GetStockData } from '@/_application/use_cases/GetStockData';
import { StockService } from '@/_services/implementations/StockService';
import { Stock } from '@/_domain/entities/entities';
import TopBar from '@/components/Header/TopBar';
import MainMenuBar from '@/components/Header/MainMenuBar';
import StockChart from '@/components/PriceBoard/Stock/StockChart';
import BuySellForm from '@/components/BuySellForm';
import StockInfo from '@/components/PriceBoard/Stock/StockInfo';
import Footer from '@/components/footer/Footer';


const HomePage: React.FC = () => {
    const [stocks, setStocks] = useState<Stock[]>([]);
    const stockService = new StockService();
    const getStockData = new GetStockData(stockService);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getStockData.execute();
            setStocks(data);
        };

        fetchData();
    }, []);

    const chartData = {
        labels: stocks.map(stock => stock.name),
        datasets: [
            {
                label: 'Stock Prices',
                data: stocks.map(stock => stock.currentPrice),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };

    return (
        <div>
            <TopBar />
            <MainMenuBar />
            <div className="container mx-auto py-4">
                <StockChart data={chartData} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {stocks.map((stock) => (
                        <StockInfo key={stock.id} stock={stock} />
                    ))}
                </div>
                <div className="mt-4">
                    <BuySellForm onSubmit={(order) => console.log(order)} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
