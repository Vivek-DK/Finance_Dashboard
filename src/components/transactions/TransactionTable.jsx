import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import TransactionRow from "./TransactionRow";
import TransactionFilters from "./TransactionFilters";

const TransactionTable = () => {
  const { filteredTransactions, role, addTransaction } = useAppContext();
  const [showForm, setShowForm] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const [formData, setFormData] = useState({
    category: "",
    amount: "",
    type: "expense",
    date: "",
  });

  // Month filter
  const monthFiltered = filteredTransactions.filter((t) => {
    if (selectedMonth === -1) return true;
    return new Date(t.date).getMonth() === selectedMonth;
  });

  // Sorting
  const sortedTransactions = [...monthFiltered].sort((a, b) => {
    const dateDiff = new Date(b.date) - new Date(a.date);
    return dateDiff !== 0 ? dateDiff : b.id - a.id;
  });

  // CSV Export
  const handleExportCSV = () => {
    if (sortedTransactions.length === 0) return;

    const headers = ["Date", "Category", "Type", "Amount"];

    const rows = sortedTransactions.map((t) => [
      t.date,
      t.category,
      t.type,
      t.amount,
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.join(","))
      .join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "transactions.csv";
    link.click();
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Transactions
          </h2>
          <p className="text-xs text-gray-500">
            Manage and track your transactions
          </p>
        </div>

        <div className="flex gap-2">
          
          {/* CSV Export */}
          <button
            onClick={handleExportCSV}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm transition"
          >
            Export CSV
          </button>

          {role === "admin" && (
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm shadow-sm transition"
            >
              + Add
            </button>
          )}

        </div>
      </div>

      {/* Filters */}
      <TransactionFilters
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />

      {/* Form Animation */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          showForm ? "max-h-40 opacity-100 mt-5" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 grid grid-cols-1 md:grid-cols-5 gap-3">
          
          <input
            type="text"
            placeholder="Category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="number"
            placeholder="Amount"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
            className="border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={formData.type}
            onChange={(e) =>
              setFormData({ ...formData, type: e.target.value })
            }
            className="border rounded-lg px-3 py-2 text-sm"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <input
            type="date"
            value={formData.date}
            onChange={(e) =>
              setFormData({ ...formData, date: e.target.value })
            }
            className="border rounded-lg px-3 py-2 text-sm"
          />

          <button
            onClick={() => {
              if (!formData.category || !formData.amount || !formData.date) {
                return;
              }

              addTransaction({
                ...formData,
                amount: Number(formData.amount),
              });

              setFormData({
                category: "",
                amount: "",
                type: "expense",
                date: "",
              });

              setShowForm(false);
            }}
            className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-3 py-2 text-sm transition"
          >
            Save
          </button>

        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-6 rounded-xl border border-gray-100">
        <table className="w-full text-sm text-left">
          
          <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
            <tr>
              <th className="py-3 px-3">Date</th>
              <th className="px-3">Category</th>
              <th className="px-3">Type</th>
              <th className="text-right px-3">Amount</th>
            </tr>
          </thead>

          <tbody>
            {sortedTransactions.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-8 text-gray-400">
                  No transactions found
                </td>
              </tr>
            ) : (
              sortedTransactions.map((t) => (
                <TransactionRow key={t.id} transaction={t} />
              ))
            )}
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default TransactionTable;