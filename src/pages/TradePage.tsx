import { Order } from '@/_domain/entities/entities';
import BuySellForm from '@/components/BuySellForm';
import MainMenuBar from '@/components/Header/MainMenuBar';
import TopBar from '@/components/Header/TopBar';
import OrderTable from '@/components/PriceBoard/StockTable/OrderTable';
import Footer from '@/components/footer/Footer';
import { useState } from 'react';


const TradePage: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);

    const handleOrderSubmit = (order: Order) => {
        setOrders([...orders, order]);
    };

    return (
        <div>
            <TopBar />
            <MainMenuBar />
            <div className="container mx-auto py-4">
                <BuySellForm onSubmit={handleOrderSubmit} />
                <OrderTable orders={orders} />
            </div>
            <Footer />
        </div>
    );
};

export default TradePage;
