import React from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const MainMenuBar: React.FC = () => {
    return (
        <NavigationMenu className="bg-gray-800 text-white p-2">
            <NavigationMenuList className="flex justify-around">
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="hover:bg-gray-600 px-3 py-2 rounded">BẢNG GIÁ</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink href="#">Link</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="hover:bg-gray-600 px-3 py-2 rounded">CÔNG CỤ PHÂN TÍCH</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink href="#">Link</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="hover:bg-gray-600 px-3 py-2 rounded">GIAO DỊCH CHỨNG KHOÁN</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink href="#">Link</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="hover:bg-gray-600 px-3 py-2 rounded">GIAO DỊCH TIỀN</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink href="#">Link</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="hover:bg-gray-600 px-3 py-2 rounded">THÔNG TIN TÀI SẢN</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink href="#">Link</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="hover:bg-gray-600 px-3 py-2 rounded">QUẢN LÝ MARGIN</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink href="#">Link</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="hover:bg-gray-600 px-3 py-2 rounded">AI NEWS</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink href="#">Link</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="hover:bg-gray-600 px-3 py-2 rounded">GIỚI THIỆU BẠN BÈ <span className="bg-green-500 px-1 rounded">MỚI</span></NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink href="#">Link</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="hover:bg-gray-600 px-3 py-2 rounded">HỖ TRỢ</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink href="#">Link</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuIndicator />
            <NavigationMenuViewport />
        </NavigationMenu>
    );
};

export default React.memo(MainMenuBar);
