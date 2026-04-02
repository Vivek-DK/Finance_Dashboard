import { useAppContext } from "../context/AppContext";
import SummaryCard from "../components/cards/SummaryCard";
import LineChart from "../components/charts/LineChart";
import PieChart from "../components/charts/PieChart";
import TransactionTable from "../components/transactions/TransactionTable";
import Insights from "../components/insights/Insights";
import Navbar from "../components/common/Navbar";

import {
  getTotalIncome,
  getTotalExpense,
  getBalance,
} from "../utils/calculations";

import { formatCurrency } from "../utils/helpers";

const Dashboard = () => {
  const { transactions } = useAppContext();

  const income = getTotalIncome(transactions);
  const expense = getTotalExpense(transactions);
  const balance = getBalance(transactions);

  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">

      {/* Navbar */}
      <Navbar />

      {/* Overview */}
      <div>
        <h2 className="text-lg font-semibold mb-3 text-gray-700">
          Overview
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SummaryCard
            title="Total Balance"
            amount={formatCurrency(balance)}
          />
          <SummaryCard
            title="Income"
            amount={formatCurrency(income)}
          />
          <SummaryCard
            title="Expenses"
            amount={formatCurrency(expense)}
          />
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <LineChart />
        <PieChart />
      </div>

      {/* Transactions */}
      <TransactionTable />

      {/* Insights */}
      <Insights />

    </div>
  );
};

export default Dashboard;