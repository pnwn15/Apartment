import React, { useState } from 'react';
import { Grid, FormControl, InputLabel, Select, MenuItem, TextField, Box, Typography, Card, CardContent } from '@mui/material';
import CardComponent from './CardComponent';
import roomData from './roomData.json';

function DashboardPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState(''); // เลือกฟิลเตอร์ (เช่น ชั้น, สถานะ)
    const [selectedFloor, setSelectedFloor] = useState(''); // สำหรับการเลือกชั้น

    const floorData = [
        { name: 'ชั้นที่ 1', status: 'all' },
        { name: 'ชั้นที่ 2', status: 'available' },
        { name: 'ชั้นที่ 3', status: 'occupied' },
        { name: 'ชั้นที่ 4', status: 'pending' }
    ];

    // ฟังก์ชั่นกรองห้อง
    const filteredRooms = roomData
        .filter((room) => {
            // กรองตามการค้นหาห้อง
            return room.title.toLowerCase().includes(searchQuery.toLowerCase());
        })
        .filter((room) => {
            // กรองตามชั้นที่เลือก
            if (selectedFloor === '') return true; // ถ้าไม่ได้เลือกชั้นใดๆ ให้แสดงทุกชั้น
            return room.floor === selectedFloor; // ตรวจสอบชั้นห้อง
        })
        .filter((room) => {
            // กรองตามสถานะห้องที่เลือก
            if (filter === '') return true; // ถ้าไม่ได้เลือกสถานะให้แสดงทุกสถานะ
            return room.statusText.toLowerCase() === filter.toLowerCase(); // ทำให้การเปรียบเทียบไม่สนใจตัวพิมพ์ใหญ่-เล็ก
        })
        

    // ฟังก์ชั่นที่ใช้ระบุสีสถานะของห้อง
    function getStatusColor(statusText) {
        if (statusText === 'ค้างชำระ') {
            return 'bg-red-500'; // สีแดงสำหรับ "ค้างชำระ"
        } else if (statusText === 'อัตราการเข้าพัก') {
            return 'bg-yellow-500'; // สีเหลืองสำหรับ "อัตราการเข้าพัก"
        } else if (statusText === 'ห้องว่าง') {
            return 'bg-green-500'; // สีเขียวสำหรับ "ห้องว่าง"
        } else {
            return 'bg-gray-500'; // สีเทาสำหรับสถานะอื่นๆ
        }
    }

    // ฟังก์ชั่นที่ใช้สำหรับการเปลี่ยนแปลงฟิลเตอร์
    const handleFilterChange = (event) => {
        setFilter(event.target.value); // เปลี่ยนฟิลเตอร์
    };

    // ฟังก์ชั่นที่ใช้สำหรับการเปลี่ยนแปลงชั้น
    const handleFloorChange = (event) => {
        setSelectedFloor(event.target.value); // เปลี่ยนชั้น
    };

    // ฟังก์ชั่นที่ใช้สำหรับการค้นหาห้อง
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value); // เปลี่ยนคำค้นหา
    };

    return (
        <Grid container spacing={2}>
            {/* CardComponent Row */}
            <Grid item xs={12}>
                <Box>
                    <CardComponent />
                </Box>
            </Grid>

            {/* Filter and Search Section */}
            <Grid item xs={12}>
                <Box>
                    <div className="bg-white p-10 h-full rounded-lg shadow-lg w-full">
                        <Typography variant="h5" component="h2" align="center" gutterBottom>
                            ผังห้อง
                        </Typography>
                        <Grid container spacing={3} wrap="wrap" justifyContent="start">
                            {/* Filter Dropdown for Status */}
                            <Grid item xs={12} sm={6} md={2}>
                                <FormControl fullWidth sx={{ maxWidth: 300 }}>
                                    <InputLabel>ฟิลเตอร์สถานะ</InputLabel>
                                    <Select
                                        value={filter}
                                        onChange={handleFilterChange}
                                        label="ฟิลเตอร์สถานะ"
                                    >
                                        <MenuItem value="">เลือกสถานะ</MenuItem>
                                        <MenuItem value="ค้างชำระ">ค้างชำระ</MenuItem>
                                        <MenuItem value="อัตราการเข้าพัก">อัตราการเข้าพัก</MenuItem>
                                        <MenuItem value="ห้องว่าง">ห้องว่าง</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            {/* Search Field */}
                            <Grid item xs={12} sm={6} md={2}>
                                <TextField
                                    label="ค้นหาห้อง"
                                    variant="outlined"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    fullWidth
                                    sx={{ maxWidth: 300 }}
                                />
                            </Grid>

                            {/* Floor Dropdown */}
                            <Grid item xs={12} sm={6} md={2}>
                                <FormControl fullWidth sx={{ maxWidth: 300 }}>
                                    <InputLabel>เลือกชั้น</InputLabel>
                                    <Select
                                        value={selectedFloor}
                                        onChange={handleFloorChange}
                                        label="ชั้น"
                                    >
                                        <MenuItem value="">เลือกชั้น</MenuItem>
                                        <MenuItem value="1">ชั้นที่ 1</MenuItem>
                                        <MenuItem value="2">ชั้นที่ 2</MenuItem>
                                        <MenuItem value="3">ชั้นที่ 3</MenuItem>
                                        <MenuItem value="4">ชั้นที่ 4</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </Grid>

            {/* Show Filtered Rooms */}
            <Grid item xs={12}>
                <Box>
                    <Grid container spacing={4}>
                        {filteredRooms.map((room, index) => (
                            <Grid item xs={12} sm={6} lg={4} key={index}>
                                <Card>
                                    <CardContent>
                                        <div className="relative">
                                            {/* Room Image */}
                                            <div
                                                className="w-full h-40 bg-cover bg-center rounded-md"
                                                style={{ backgroundImage: `url(${room.imageUrl})` }}
                                            ></div>
                                            {/* Room Status Badge */}
                                            <div
                                                className={`absolute top-0 right-0 m-2 ${getStatusColor(room.statusText)} text-white text-sm px-2 py-1 rounded-md`}
                                            >
                                                {room.statusText}
                                            </div>
                                            {/* Card Content */}
                                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent">
                                                <Typography variant="h6" className="font-bold text-white">
                                                    {room.title}
                                                </Typography>
                                                <Typography variant="body2" className="text-white">
                                                    {room.description}
                                                </Typography>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
}

export default DashboardPage;
