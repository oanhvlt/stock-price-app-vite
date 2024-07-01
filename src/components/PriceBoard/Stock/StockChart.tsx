import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface StockChartProps {
    data: any;
}

const StockChart: React.FC<StockChartProps> = ({ data }) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Stock Price Chart',
            },
        },
    };

    return (
        <div className="w-full h-64">
            <Line data={data} options={options} />
        </div>
    );
};

export default StockChart;
