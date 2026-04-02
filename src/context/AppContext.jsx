// src/context/AppContext.jsx

import { createContext, useContext, useEffect, useState } from "react";
import { mockTransactions } from "../data/mockData";

// create context
const AppContext = createContext();

/**
 * AppProvider
 * --------------------------------------
 * Handles global state for the application:
 * - transactions (main data)
 * - role (viewer/admin)
 * - filters (search + type)
 */
export const AppProvider = ({ children }) => {
  // load from localStorage if available, else use mock data
  const storedData = localStorage.getItem("transactions");

  const [transactions, setTransactions] = useState(
    storedData ? JSON.parse(storedData) : mockTransactions
  );

  const [role, setRole] = useState("viewer"); // default role

  const [filters, setFilters] = useState({
    search: "",
    type: "all", // all | income | expense
  });

  /**
   * Persist transactions to localStorage
   * so data remains after refresh
   */
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  /**
   * Add new transaction (used for admin role)
   */
  const addTransaction = (newTransaction) => {
    setTransactions((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        ...newTransaction,
      },
    ]);
  };

  /**
   * Filtered transactions based on search + type
   */
  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch =
      t.category.toLowerCase().includes(filters.search.toLowerCase());

    const matchesType =
      filters.type === "all" ? true : t.type === filters.type;

    return matchesSearch && matchesType;
  });

  return (
    <AppContext.Provider
      value={{
        transactions,
        filteredTransactions,
        role,
        setRole,
        filters,
        setFilters,
        addTransaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

/**
 * Custom hook for easy usage
 */
export const useAppContext = () => {
  return useContext(AppContext);
};