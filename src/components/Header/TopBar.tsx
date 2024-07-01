import { Button } from '@/components/ui/button';
import React from 'react';

const TopBar: React.FC = () => {
    return (
        <div className="bg-gray-800 p-2 flex justify-between items-center text-white">
            <div className="flex items-center space-x-4">
                <img src="/logo.png" alt="Logo" className="h-8" />
                <span>Vietcap</span>
                <span className="text-sm">Cơ sở</span>
                <span className="text-sm">Phái sinh</span>
            </div>
            <div className="flex items-center space-x-4">
                <span className="text-sm">18:06:16 | 30/06/2024</span>
                <Button className="bg-transparent hover:bg-gray-600">
                    <i className="fas fa-bell"></i>
                </Button>
                <span>Vũ Lê Thúy Oanh</span>
                <img src="/avatar.png" alt="Avatar" className="h-8 w-8 rounded-full" />
                <Button className="bg-transparent hover:bg-gray-600">
                    <i className="fas fa-moon"></i>
                </Button>
                <img src="/flag.png" alt="Flag" className="h-6" />
            </div>
        </div>
    );
};

export default React.memo(TopBar);
