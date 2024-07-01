import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
    scales: {
        x: {
            display: false,
        },
        y: {
            display: false,
        },
    },
};

const data = {
    labels: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00'],
    datasets: [
        {
            label: 'Price',
            data: [1200, 1220, 1210, 1230, 1240, 1235],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: false,
            tension: 0.1,
        },
    ],
};

const CardStock: React.FC = () => {
    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-md text-white w-64">
            <div className="flex justify-between items-center mb-2">
                <div>
                    <div className="text-lg font-bold">VN-Index</div>
                    <div className="text-sm text-red-500">1,243.16</div>
                </div>
                <div className="text-right">
                    <div className="text-sm text-red-500">0.17%</div>
                    <div className="text-sm text-red-500">2.16</div>
                </div>
            </div>
            <div className="text-sm mb-2">
                KL: 21,691,200 • GT: 518.87 Tỷ
            </div>
            <div className="text-sm mb-2">
                <span className="text-green-500">160(3)</span> • <span className="text-yellow-500">80</span> • <span className="text-red-500">126(0)</span>
            </div>
            <Line options={options} data={data} height={100} />
            <div className="text-sm mt-2">
                <div>Thời gian: 13:27</div>
                <div>Chỉ số: 1,253.86</div>
                <div>KL khớp: 2.6 M</div>
            </div>
        </div>
    );
};

export default CardStock;
