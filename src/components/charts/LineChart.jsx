import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useAppContext } from "../../context/AppContext";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const LineChart = () => {
  const { transactions } = useAppContext();

  // group data by date
  const grouped = {};

  transactions.forEach((t) => {
    if (!grouped[t.date]) {
      grouped[t.date] = 0;
    }

    grouped[t.date] += t.type === "income" ? t.amount : -t.amount;
  });

  const labels = Object.keys(grouped);
  const dataValues = Object.values(grouped);

  const data = {
    labels,
    datasets: [
      {
        label: "Balance Trend",
        data: dataValues,
        borderColor: "#3b82f6",
        backgroundColor: "#3b82f6",
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm">
      <h2 className="text-md font-semibold mb-3">Balance Trend</h2>
      <Line data={data} />
    </div>
  );
};

export default LineChart;