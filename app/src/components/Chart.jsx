import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: false
    }
  }
};

export default function BarChart({ goalsFor, goalsAgainst }) {
  const labels = Object.keys(goalsFor);
  const data = {
    labels,
    datasets: [
      {
        label: 'Goals for',
        data: Object.values(goalsFor).map(({ total }) => total),
        backgroundColor: 'rgb(124,252,0)',
        borderColor: 'green',
        borderWidth: 1
      },
      {
        label: 'Goals against',
        data: Object.values(goalsAgainst).map(({ total }) => total),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'red',
        borderWidth: 1
      }
    ]
  };
  return (
    <div>
      <Bar className="Chart_div" options={options} data={data} width={400} height={100} />
    </div>
  );
}

BarChart.propTypes = {
  goalsFor: PropTypes.object.isRequired,
  goalsAgainst: PropTypes.object.isRequired
};
