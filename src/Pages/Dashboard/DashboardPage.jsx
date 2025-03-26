import React, { useState } from 'react';
import { Grid, FormControl, InputLabel, Select, MenuItem, Card, CardContent, Typography, TextField, Box } from '@mui/material';
import CardComponent from './CardComponent';
import roomData from './roomData.json';

function DashboardPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState(''); // For floor or other filtering
    const [floorData, setFloorData] = useState(null);

    const floorContent = {
        all: (
            <div className="h-screen">
                <div className="bg-gray-200">
                    <h1 className="text-3xl font-bold p-5 text-black">ชั้นที่ 1</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-5">
                    {roomData.map((card, index) => (
                        <div key={index} className="bg-white shadow-lg relative">
                            {/* Room Image */}
                            <div
                                className="w-full h-40 bg-cover bg-center rounded-md"
                                style={{ backgroundImage: `url(${card.imageUrl})` }}
                            ></div>
                            {/* Room Status Badge */}
                            <div className={`absolute top-0 right-0 m-2 ${getStatusColor(card.statusText)} text-white text-sm px-2 py-1 rounded-md`}>
                                {card.statusText}
                            </div>
                            {/* Card Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent">
                                <h2 className="font-bold text-xl text-white">{card.title}</h2>
                                <p className="text-white">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ),
        available: (
            <div className="h-screen">
                <div className="bg-gray-200">
                    <h1 className="text-3xl font-bold p-5 text-black">ชั้นที่ 2 (ห้องจอง)</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-5">
                    {roomData.filter(room => room.statusText === 'ห้องจอง').map((card, index) => (
                        <div key={index} className="bg-white shadow-lg relative">
                            {/* Room Image */}
                            <div
                                className="w-full h-40 bg-cover bg-center rounded-md"
                                style={{ backgroundImage: `url(${card.imageUrl})` }}
                            ></div>
                            {/* Room Status Badge */}
                            <div className={`absolute top-0 right-0 m-2 ${getStatusColor(card.statusText)} text-white text-sm px-2 py-1 rounded-md`}>
                                {card.statusText}
                            </div>
                            {/* Card Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent">
                                <h2 className="font-bold text-xl text-white">{card.title}</h2>
                                <p className="text-white">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ),
        occupied: (
            <div className="h-screen">
                <div className="bg-gray-200">
                    <h1 className="text-3xl font-bold p-5 text-black">ชั้นที่ 3 (ค้างชำระ)</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-5">
                    {roomData.filter(room => room.statusText === 'ค้างชำระ').map((card, index) => (
                        <div key={index} className="bg-white shadow-lg relative">
                            {/* Room Image */}
                            <div
                                className="w-full h-40 bg-cover bg-center rounded-md"
                                style={{ backgroundImage: `url(${card.imageUrl})` }}
                            ></div>
                            {/* Room Status Badge */}
                            <div className={`absolute top-0 right-0 m-2 ${getStatusColor(card.statusText)} text-white text-sm px-2 py-1 rounded-md`}>
                                {card.statusText}
                            </div>
                            {/* Card Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent">
                                <h2 className="font-bold text-xl text-white">{card.title}</h2>
                                <p className="text-white">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ),
        pending: (
            <div className="h-screen">
                <div className="bg-gray-200">
                    <h1 className="text-3xl font-bold p-5 text-black">ชั้นที่ 4 (ห้องว่าง)</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-5">
                    {roomData.filter(room => room.statusText === 'ห้องว่าง').map((card, index) => (
                        <div key={index} className="bg-white shadow-lg relative">
                            {/* Room Image */}
                            <div
                                className="w-full h-40 bg-cover bg-center rounded-md"
                                style={{ backgroundImage: `url(${card.imageUrl})` }}
                            ></div>
                            {/* Room Status Badge */}
                            <div className={`absolute top-0 right-0 m-2 ${getStatusColor(card.statusText)} text-white text-sm px-2 py-1 rounded-md`}>
                                {card.statusText}
                            </div>
                            {/* Card Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent">
                                <h2 className="font-bold text-xl text-white">{card.title}</h2>
                                <p className="text-white">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ),
    };

    // Helper function to determine the status color
    function getStatusColor(statusText) {
        if (statusText === 'ค้างชำระ') {
            return 'bg-red-500'; // Red color for "ค้างชำระ"
        } else if (statusText === 'อัตราการเข้าพัก') {
            return 'bg-yellow-500'; // Yellow color for "อัตราการเข้าพัก"
        } else if (statusText === 'ห้องว่าง') {
            return 'bg-green-500'; // Green color for "ห้องว่าง"
        } else {
            return 'bg-gray-500'; // Default gray for other statuses
        }
    }

    // Handle filter change (to switch between different floors)
    const handleFilterChange = (event) => {
        const selectedFloor = event.target.value;
        setFilter(selectedFloor);

        // Use object to fetch corresponding content for the selected floor
        setFloorData(floorContent[selectedFloor] || null);
    };

    // Handle search input change
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
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
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full">
                        <Typography variant="h5" component="h2" align="center" gutterBottom>
                            ผังห้อง
                        </Typography>
                        <Grid container spacing={3} wrap="wrap" justifyContent="start">
                            {/* Filter Dropdown */}
                            <Grid item xs={12} sm={6} md={2}>
                                <FormControl fullWidth sx={{ maxWidth: 300 }}>
                                    <InputLabel>ฟิลเตอร์ห้อง</InputLabel>
                                    <Select
                                        value={filter}
                                        onChange={handleFilterChange}
                                        label="ฟิลเตอร์ห้อง"
                                        fullWidth
                                        sx={{ fontSize: '0.875rem' }}  // Reduce font size
                                    >
                                        <MenuItem value="">เลือกฟิลเตอร์</MenuItem>
                                        <MenuItem value="all">อัตราการเข้าพัก</MenuItem>
                                        <MenuItem value="available">ห้องจอง</MenuItem>
                                        <MenuItem value="occupied">ค้างชำระ</MenuItem>
                                        <MenuItem value="pending">ห้องว่าง</MenuItem>
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
                            <Grid item xs={12} sm={6} md={2}>
                                <FormControl fullWidth sx={{ maxWidth: 300 }}>
                                    <InputLabel>เลือกชั้น</InputLabel>
                                    <Select
                                        value={filter}
                                        onChange={handleFilterChange}
                                        label="ชั้น"
                                        fullWidth
                                        sx={{ fontSize: '0.875rem' }} // ลดขนาดฟอนต์
                                    >
                                        <MenuItem value="">เลือกชั้น</MenuItem>
                                        <MenuItem value="all">1</MenuItem>
                                        <MenuItem value="available">2</MenuItem>
                                        <MenuItem value="occupied">3</MenuItem>
                                        <MenuItem value="pending">4</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </Grid>

            {/* Show Floor Content */}
            <Grid item xs={12}>
                <Box>
                    {floorData && (
                        <Grid item xs={12}>
                            <Card>
                                <CardContent sx={{ padding: 0, margin: 0 }}> {/* Remove padding and margin */}
                                    <Typography variant="body1">{floorData}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )}
                </Box>
            </Grid>
        </Grid>
    );
}

export default DashboardPage;
