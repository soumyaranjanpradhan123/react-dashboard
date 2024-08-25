import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Step 1: Register the required components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function IntensityChart({ data }) {
    const chartData = {
        labels: data.map(item => item.title),
        datasets: [
            {
                label: 'Intensity',
                data: data.map(item => item.intensity),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }
        ]
    };

    return (
        <div>
            <h2>Intensity Chart</h2>
            <Bar data={chartData} />
        </div>
    );
}

export default IntensityChart;
