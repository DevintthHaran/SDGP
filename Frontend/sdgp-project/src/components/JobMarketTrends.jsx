import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import '../style/JobMarketTrends.css';

// Updated job trends data for 2021-2025
const jobTrendsData = {
  "software engineer": {
    salary: [95000, 100000, 105000, 110000],
    years: ["2021", "2022", "2023", "2024"],
    demand: "Increasing",
    source: "Sri Lanka IT Industry Survey 2025"
  },
  "data scientist": {
    salary: [100000, 105000, 110000, 115000],
    years: ["2021", "2022", "2023", "2024"],
    demand: "Increasing",
    source: "Sri Lanka Data Science Association Report 2025"
  },
  "web developer": {
    salary: [44000, 58700, 86800, 106000],
    years: ["2021", "2022", "2023", "2024"],
    demand: "Increasing",
    source: "Web Development Market Trends 2025"
  },
  "web designer": {
    salary: [54000, 60000, 68000, 75000],
    years: ["2021", "2022", "2023", "2024"],
    demand: "Increasing",
    source: "Design Industry Overview 2025"
  },
  "computer science": {
    salary: [85000, 90000, 95000, 100000],
    years: ["2021", "2022", "2023", "2024"],
    demand: "Increasing",
    source: "Sri Lanka Education Ministry 2025"
  },
  "ethical hacking": {
    salary: [110000, 120000, 130000, 140000],
    years: ["2021", "2022", "2023", "2024"],
    demand: "Increasing",
    source: "Cybersecurity Demand Report 2025"
  },
  "sales manager": {
    salary: [90000, 95000, 100000, 105000],
    years: ["2021", "2022", "2023", "2024"],
    demand: "Stable",
    source: "Sales and Marketing Insights 2025"
  },
  "project manager": {
    salary: [100000, 105000, 110000, 120000],
    years: ["2021", "2022", "2023", "2024"],
    demand: "Increasing",
    source: "Project Management Review 2025"
  },
  "network engineer": {
    salary: [80000, 85000, 90000, 95000],
    years: ["2021", "2022", "2023", "2024"],
    demand: "Stable",
    source: "Telecom Industry Report 2025"
  },
  "digital marketer": {
    salary: [70000, 75000, 80000, 85000],
    years: ["2021", "2022", "2023", "2024"],
    demand: "Increasing",
    source: "Digital Marketing Trends 2025"
  },
  "ai specialist": {
    salary: [120000, 130000, 140000, 150000],
    years: ["2021", "2022", "2023", "2024"],
    demand: "Increasing",
    source: "AI Industry Report 2025"
  }
};

function JobMarketTrends({ job }) {
  if (!job) return <div>Please enter a job to search for trends.</div>;

  const jobKey = job.toLowerCase();
  const jobDetails = jobTrendsData[jobKey];

  if (!jobDetails) return <div>No data available for this job.</div>;

  const chartData = {
    labels: jobDetails.years,
    datasets: [
      {
        label: 'Average Salary (LKR)',
        data: jobDetails.salary,
        backgroundColor: 'rgba(0, 51, 102, 0.6)',
        borderColor: '#003366',
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="job-market-trends">
      <h2>{job} Market Trends</h2>
      <div className="chart-container">
        <Bar data={chartData} />
        <p><strong>Demand: </strong>{jobDetails.demand}</p>
        <div className="source">Source: {jobDetails.source}</div>
      </div>
    </div>
  );
}

export default JobMarketTrends;
