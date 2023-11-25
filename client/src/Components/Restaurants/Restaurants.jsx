import React from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, message } from 'antd';
import logo from '../../Assets/Images/restaurant.jpg';
import AddButton from '../Button/Button';

const handleButtonClick = (e) => {
    message.info('Click on left button.');
    console.log('click left button', e);
};

const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
};

const items = [
    {
        label: 'Update Restaurant',
        key: '1',
        icon: <UserOutlined />,
    },
    {
        label: 'Delete Restaurant',
        key: '2',
        icon: <UserOutlined />,
        danger: true,
    },

];

const menu = (
    <Menu onClick={handleMenuClick}>
        {items.map((item) => (
            <Menu.Item key={item.key} icon={item.icon} danger={item.danger}>
                {item.label}
            </Menu.Item>
        ))}
    </Menu>
);

const Restaurant = () => (
    <div className="p-8">
        <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-bold text-gray-600 text-center md:text-left">Discover Amazing Restaurants</h1>
            <AddButton
                className="bg-[#F39300] text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition w-full md:w-full"
                text="Explore Now" />
        </div>

        <div className="flex flex-wrap justify-center items-center p-4">
            {[1, 2, 3, 4].map((index) => (
                <div key={index} className="card relative w-full bg-[#fcca80] md:w-96 shadow-xl m-4">
                    <figure className="px-10 pt-10">
                        <img src={logo} alt={`Restaurant ${index}`} className="rounded-xl w-full h-48 object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-gray-900 text-lg font-bold my-2">Tasty Delights</h2>
                        <p className="text-xs font-semibold text-gray-950 mb-4">Contact: (123) 456-7890</p>
                    </div>

                    <div className="absolute right-4 bottom-4">
                        <Dropdown overlay={menu} placement="bottomRight" arrow>
                            <Button className='bg-white'>More</ Button>
                        </Dropdown>
                    </div>
                </div>
            ))}
            {/* Add more cards as needed */}
        </div>
    </div>
);

export default Restaurant;
