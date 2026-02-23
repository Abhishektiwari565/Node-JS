
# 💰 Expense Tracker – MERN Stack Application

Welcome to the **Expense Tracker Application** built using **React.js (Frontend)** and **Node.js + Express.js + MongoDB (Backend)**.

This project helps users to:

* ✅ Add Income
* ✅ Add Expense
* ✅ View All Transactions
* ✅ See Total Income
* ✅ See Total Expense
* ✅ See Total Balance
* ✅ Authentication with Cookies

---

# 🚀 Tech Stack

### 🌐 Frontend

* ⚛️ React.js
* 📡 Axios
* 🎨 Bootstrap

### 🖥 Backend

* 🟢 Node.js
* 🚀 Express.js
* 🍃 MongoDB
* 🔐 Cookie-based Authentication

---

# 📌 Features Explained

## 🟢 Add Income

User can add income with:

* Amount
* Category (Salary, Freelance, etc.)
* Note

## 🔴 Add Expense

User can add expense with:

* Amount
* Category
* Note


## 📊 Dashboard Summary

The dashboard calculates:

```
Total Income  = Sum of all income transactions
Total Expense = Sum of all expense transactions
Balance       = Income - Expense
```

If no data exists → Balance shows ₹0.

---

## 📃 Get All Transactions

```
GET /get-transactions
```

# 🔐 Authentication

* Uses `withCredentials: true`
* Cookies maintain login session
* Only logged-in users can access transactions

---

# 💡 How It Works (Simple Flow)

1️⃣ User logs in
2️⃣ User adds income/expense
3️⃣ Data stored in MongoDB
4️⃣ Dashboard fetches all transactions
5️⃣ Calculates totals dynamically
6️⃣ UI updates automatically

---

# 📸 UI Pages

* 🏠 Dashboard
* ➕ Add Income
* ➖ Add Expense
* 📜 Transactions Page

---
demo video:

https://github.com/user-attachments/assets/edbc80bb-8fea-4bed-ac2f-1c268a6030b6




