import { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import TransactionRow from "./TransactionRow";
import TransactionFilters from "./TransactionFilters";

const TransactionTable = () => {
  const { filteredTransactions, role, addTransaction } = useAppContext();
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    category: "",
    amount: "",
    type: "expense",
    date: "",
  });

  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    const dateDiff = new Date(b.date) - new Date(a.date);
    return dateDiff !== 0 ? dateDiff : b.id - a.id;
  });
  
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">
          Transactions
        </h2>

        {role === "admin" && (
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm"
          >
            + Add
          </button>
        )}
      </div>

      {/* Filters */}
      <TransactionFilters />

      {showForm && (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-3">
          
          <input
            type="text"
            placeholder="Category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="border rounded-lg px-3 py-2"
          />

          <input
            type="number"
            placeholder="Amount"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
            className="border rounded-lg px-3 py-2"
          />

          <select
            value={formData.type}
            onChange={(e) =>
              setFormData({ ...formData, type: e.target.value })
            }
            className="border rounded-lg px-3 py-2"
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
            className="border rounded-lg px-3 py-2"
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
            className="bg-green-500 text-white rounded-lg px-3 py-2"
          >
            Save
          </button>

        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto mt-4">
        <table className="w-full text-sm text-left">
          
          <thead className="text-gray-500 border-b bg-gray-50">
            <tr>
              <th className="py-2 px-2">Date</th>
              <th className="px-2">Category</th>
              <th className="px-2">Type</th>
              <th className="text-right px-2">Amount</th>
            </tr>
          </thead>

          <tbody>
            {sortedTransactions.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-400">
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