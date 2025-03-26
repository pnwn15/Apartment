import React, { useState } from 'react';
import { TextField, Select, MenuItem, InputLabel, FormControl, Grid, Box, Typography } from '@mui/material';
import CardComponent from './CardComponent';

function DashboardPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('');

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
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

                        <Grid container spacing={3} justifyContent="space-between">
                            {/* ฟิลเตอร์ Dropdown */}
                            <Grid item xs={12} sm={5}>
                                <FormControl fullWidth>
                                    <InputLabel>ฟิลเตอร์</InputLabel>
                                    <Select
                                        value={filter}
                                        onChange={handleFilterChange}
                                        label="ฟิลเตอร์"
                                        fullWidth
                                    >
                                        <MenuItem value="">เลือกฟิลเตอร์</MenuItem>
                                        <MenuItem value="all">อัตราการเข้าพัก</MenuItem>
                                        <MenuItem value="available">ห้องจอง</MenuItem>
                                        <MenuItem value="occupied">ค้างชำระ</MenuItem>
                                        <MenuItem value="pending">ห้องว่าง</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            {/* ฟิลด์ค้นหา */}
                            <Grid item xs={12} sm={5}>
                                <TextField
                                    label="ค้นหาห้อง"
                                    variant="outlined"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </Grid>

            {/* Additional Grid Section */}
            <Grid item xs={4}>
                <Box>
                    <Typography>xs=4</Typography>
                </Box>
            </Grid>
            <Grid item xs={8}>
                <Box>
                    <Typography>xs=8</Typography>
                </Box>
            </Grid>
        </Grid>
    );
}

export default DashboardPage;
