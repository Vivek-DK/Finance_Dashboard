// src/utils/helpers.js

/**
 * Format number into INR currency
 */
export const formatCurrency = (value) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
};

/**
 * Format date from YYYY-MM-DD → DD-MM-YYYY
 */
export const formatDate = (dateString) => {
  return new Intl.DateTimeFormat("en-IN").format(new Date(dateString));
};