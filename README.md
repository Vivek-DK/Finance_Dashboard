# 💰 Finance Dashboard UI

A clean, modern, and interactive finance dashboard built using **React**, **Tailwind CSS**, and **Chart.js**.
This project simulates a financial tracking system where users can analyze transactions, monitor spending patterns, and interact with a role-based UI.

---

## 🚀 Features

### 📊 Dashboard Overview

* Total Balance, Income, and Expenses summary cards
* Clean and responsive layout
* Smooth hover animations for better UX

---

### 📈 Data Visualization

* Line chart for time-based balance trends
* Pie chart for category-wise expense breakdown

---

### 📋 Transactions Management

* View all transactions in a structured table
* Search by category
* Filter by:

  * Transaction type (income/expense)
  * Month (dynamic filtering)
* Sorted by latest transactions first

---

### ➕ Add Transaction (Admin Only)

* Dynamic form with smooth expand/collapse animation
* Instant UI updates
* Data persists using **localStorage**

---

### 📤 Export Functionality

* Export transactions as **CSV file**
* Works with filtered data (month/type/search)

---

### 🔐 Role-Based UI

* **Viewer** → read-only access
* **Admin** → can add transactions

---

### 💡 Insights & Analytics

* Monthly income, expenses, and net balance
* Highest spending category (month-based)
* Monthly change (₹) with trend indicators (↑ ↓)
* Percentage change (%)
* Smart color-coded financial indicators

---

### 💾 Data Persistence

* Data stored in browser using localStorage
* Maintains state across page reloads

---

### ✨ UI/UX Enhancements

* Smooth transitions and hover animations
* Clean card-based layout
* Modern table styling
* Responsive design across all devices

---

## 🛠️ Tech Stack

* React (Vite)
* Tailwind CSS
* Chart.js (react-chartjs-2)
* Context API (State Management)

---

## 📂 Project Structure

```bash
finance-dashboard/
│
├── src/
│   ├── assets/
│
│   ├── components/
│   │   ├── cards/
│   │   │   └── SummaryCard.jsx
│   │   │
│   │   ├── charts/
│   │   │   ├── LineChart.jsx
│   │   │   └── PieChart.jsx
│   │   │
│   │   ├── transactions/
│   │   │   ├── TransactionTable.jsx
│   │   │   ├── TransactionRow.jsx
│   │   │   └── TransactionFilters.jsx
│   │   │
│   │   ├── insights/
│   │   │   └── Insights.jsx
│   │   │
│   │   └── common/
│   │       ├── Navbar.jsx
│   │       ├── RoleSwitcher.jsx
│   │       └── Loader.jsx
│
│   ├── context/
│   │   └── AppContext.jsx
│
│   ├── data/
│   │   └── mockData.js
│
│   ├── utils/
│   │   ├── calculations.js
│   │   └── helpers.js
│
│   ├── pages/
│   │   └── Dashboard.jsx
│
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/Vivek-DK/finance-dashboard.git

# Navigate to project folder
cd finance-dashboard

# Install dependencies
npm install

# Run the development server
npm run dev
```

---

## 🧪 Usage

```bash
# Open in browser
http://localhost:5173
```

* Switch roles using dropdown (Viewer/Admin)
* Add new transactions (Admin only)
* Apply filters (search, type, month)
* Export filtered data as CSV
* View insights and analytics

---

## 🎥 Demo Video

📺 Google Drive Link:
https://drive.google.com/file/d/1CkxXNO0LgyLf0e9fExNZ6fILOpLsfca8/view?usp=sharing

---

## 📸 Screenshots
--- 
## Home Page
![image alt](https://github.com/Vivek-DK/Finance_Dashboard/blob/7ba644cfb054bb7c9813c00f75171d87356f4674/src/assets/home.png)

---

## Transactions
![image alt](https://github.com/Vivek-DK/Finance_Dashboard/blob/7ba644cfb054bb7c9813c00f75171d87356f4674/src/assets/transactions.png)
---

## Insights
![image alt](https://github.com/Vivek-DK/Finance_Dashboard/blob/7ba644cfb054bb7c9813c00f75171d87356f4674/src/assets/Insights.png)
---

## 🧠 Approach

* Component-based architecture for scalability
* Context API for centralized state management
* Utility functions for reusable logic
* Focus on clean UI and intuitive UX
* Month-based filtering for better data analysis
* Real-time updates with persistent storage

---

## ⚠️ Assumptions

* No backend integration required
* Role-based behavior is simulated on frontend
* Data persists only in browser (localStorage)

---

## 🔮 Future Improvements

* Backend API integration
* Authentication system
* Advanced analytics dashboard
* Dark mode
* Data export (JSON format)
* Performance optimizations

---

## 📌 Notes

This project was built as part of a frontend assessment.
The focus was on **UI design, data handling, and user experience**, rather than backend implementation.

---

## 👤 Author

Vivek DK

---

## ⭐ Acknowledgment

Assignment provided by Zorvyn FinTech Pvt. Ltd.
