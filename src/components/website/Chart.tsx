// PolarAreaChart.js
import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  RadialLinearScale,
} from 'chart.js';

// 注册所有需要的组件
ChartJS.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale);

const PolarAreaChart = () => {
  const data = {
    labels: ['Coding', 'Music', 'Study', 'Running', 'Game'], // 修改标签为指定的活动
    datasets: [
      {
        label: 'Activity Scores',
        data: [9, 5, 9, 3, 3], // 示例数据，根据需要调整
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const, // 明确指定为 const
      },
      title: {
        display: true,
        text: 'My daily schedule',
      },
    },
  };

  return (
    <div>
      <PolarArea data={data} options={options} />
    </div>
  );
};

export default PolarAreaChart;
