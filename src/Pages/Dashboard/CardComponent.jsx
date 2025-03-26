import React from 'react';
import { CarryOutOutlined, ClockCircleOutlined, UsergroupAddOutlined, AuditOutlined } from '@ant-design/icons'; // ตัวอย่างการนำเข้าไอคอน

function CardComponent() {
    // ข้อมูลของการ์ด
    const cards = [
        { title: '75%', description: 'อัตราการเข้าพัก', icons: <CarryOutOutlined />, classname: 'flex items-center my-auto border bg-blue-300 border-blue-500 p-2 w-12 h-12 rounded-full justify-center', className:'text-xl text-blue-600' },
        { title: '3 ห้อง', description: 'ห้องจอง', icons: <ClockCircleOutlined />, classname: 'flex items-center my-auto border bg-green-300 border-green-500 p-2 w-12 h-12 rounded-full justify-center', className: 'text-xl text-green-600' },
        { title: '22 ห้อง', description: 'ค้างชำระ', icons: <UsergroupAddOutlined />, classname: 'flex items-center my-auto border bg-red-300 border-red-500 p-2 w-12 h-12 rounded-full justify-center', className: 'text-xl text-red-600' },
        { title: '8 ห้อง', description: 'ห้องว่าง', icons: <AuditOutlined />, classname: 'flex items-center my-auto border bg-yellow-300 border-yellow-500 p-2 w-12 h-12 rounded-full justify-center', className: 'text-xl text-yellow-600' }
    ];

    return (
        <div className="flex flex-wrap gap-4 justify-between">
            {cards.map((card, index) => (
                <div key={index} className="w-full flex justify-around sm:w-full h-full lg:w-1/5 p-4 bg-white shadow-lg rounded-lg">
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
                        <p className="text-gray-600 mt-2">{card.description}</p>
                    </div>
                    {/* icons */}
                    <div className={card.classname || 'flex items-center justify-center'}>
                        {typeof card.icons === 'string' ? (
                            <img src={card.icons} alt="icon" className="w-12 h-12 rounded-full" />
                        ) : (
                            <span className={card.className}>{card.icons}</span>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardComponent;
