import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { useAppContext } from "../../context/AppContext";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const { transactions } = useAppContext();

  const categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const labels = Object.keys(categoryMap);
  const values = Object.values(categoryMap);

  const generateColors = (count) => {
    return Array.from({ length: count }, (_, i) => {
      const hue = (i * 500) / count;
      return `hsl(${hue}, 70%, 60%)`;
    });
  };

  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: generateColors(labels.length),
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm">
      <h2 className="text-md font-semibold mb-3">
        Spending Breakdown
      </h2>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;