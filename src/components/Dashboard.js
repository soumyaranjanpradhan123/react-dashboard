import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IntensityChart from './charts/IntensityChart';
import Filter from './Filter';

function Dashboard() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [selectedYear, setSelectedYear] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3001/api/data')  // Update to match your server port
            .then(response => {
                setData(response.data);
                setFilteredData(response.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleYearChange = (e) => {
        const year = e.target.value;
        setSelectedYear(year);
        setFilteredData(data.filter(item => item.year === year));
    };

    return (
        <div>
            <Filter label="Year" options={[...new Set(data.map(item => item.start_year))]} onChange={handleYearChange} />
            <IntensityChart data={filteredData} />
            {/* Add more charts and filters */}
        </div>
    );
}

export default Dashboard;
