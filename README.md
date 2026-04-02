# 💰 Finance Dashboard UI

A clean and interactive finance dashboard built using **React**, **Tailwind CSS**, and **Chart.js**.
This project simulates a financial tracking system where users can view transactions, analyze spending patterns, and manage data with a simple role-based interface.

---

## 🚀 Features

* 📊 Dashboard overview with:

  * Total Balance
  * Income
  * Expenses

* 📈 Charts:

  * Line chart for balance trend
  * Pie chart for category-wise spending

* 📋 Transactions Table:

  * View all transactions
  * Search by category
  * Filter by type (income/expense)

* 🔐 Role-based UI:

  * Viewer → read-only access
  * Admin → can add transactions

* ➕ Add Transaction:

  * Dynamic form
  * Updates UI instantly
  * Saves data in localStorage

* 💡 Insights:

  * Highest spending category
  * Basic financial observations

* 💾 Persistence:

  * Data stored in browser (localStorage)

* 📱 Responsive Design:

  * Works across desktop, tablet, and mobile

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
* Use filters to explore data
* View charts for insights

---

## 🎥 Demo Video
📺 Google Drive Link: https://drive.google.com/file/d/1CkxXNO0LgyLf0e9fExNZ6fILOpLsfca8/view?usp=sharing

--- 

## 📸 Screenshots
--- 
## Home Page
![image alt](https://github.com/Vivek-DK/Finance-Dashboard/blob/d92d7a2c865b96f75dfbb55d38e32e510302deeb/src/assets/home.png)

---

## Transactions
![image alt](https://github.com/Vivek-DK/Finance-Dashboard/blob/d92d7a2c865b96f75dfbb55d38e32e510302deeb/src/assets/transactions.png)
---

## search_results_&_Insights
![image alt](https://github.com/Vivek-DK/Finance-Dashboard/blob/d92d7a2c865b96f75dfbb55d38e32e510302deeb/src/assets/search_results_%26_insights%20.png)
---


## 🧠 Approach

* Built using component-based architecture
* Used Context API for global state management
* Separated logic into utility functions for better scalability
* Focused on clean UI and intuitive UX
* Used mock data with localStorage for persistence

---

## ⚠️ Assumptions

* No backend integration required
* Role-based behavior is simulated on frontend
* Data is not persisted across devices

---

## 🔮 Future Improvements

* Backend integration (API)
* Authentication system
* Advanced analytics
* Export data (CSV/JSON)
* Dark mode support

---

## 📌 Notes

This project was built as part of a frontend assessment.
The focus was on **UI design, state management, and user experience**, rather than production-level backend implementation.

---

## 👤 Author

Vivek DK

---

## ⭐ Acknowledgment

Assignment provided by Zorvyn FinTech Pvt. Ltd.
