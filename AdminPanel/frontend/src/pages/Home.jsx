import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { base_uri } from "../utils/global_variables.js";

export default function Home() {
  const navigate = useNavigate();

  const [transactions, setTransactions] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);

  const handleLogOut = async () => {
    try {
      const res = await axios.get(
        `${base_uri}/auth/signout`,
        { withCredentials: true }
      );
      alert(res.data.message);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  const getTransactions = async () => {
    try {
      const res = await axios.get(
        `${base_uri}/transaction/get`,
        { withCredentials: true }
      );

      if (res.data.status) {
        const data = res.data.transactions;
        setTransactions(data);

        const totalIncome = data
          .filter((t) => t.type === "income")
          .reduce((acc, t) => acc + Number(t.amount), 0);

        const totalExpense = data
          .filter((t) => t.type === "expense")
          .reduce((acc, t) => acc + Number(t.amount), 0);

        setIncome(totalIncome);
        setExpense(totalExpense);
        setBalance(totalIncome - totalExpense);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row min-vh-100">

        {/* ===== Sidebar ===== */}
        <div className="col-md-3 col-lg-2 bg-dark text-white p-4">
          <h4 className="fw-bold mb-4">FinTrack</h4>

          <ul className="nav flex-column gap-2">
            <li className="nav-item">
              <Link to="/profile" className="nav-link text-white">
                📊 Profile
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/add-emp" className="nav-link text-white">
                📊 Add Employee
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/transactions" className="nav-link text-white">
                💳 Transactions
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/budget" className="nav-link text-white">
                📌 Budget Planner
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/reports" className="nav-link text-white">
                📈 Reports
              </Link>
            </li>

            <li className="nav-item mt-3">
              <button
                onClick={handleLogOut}
                className="nav-link text-danger btn btn-link"
              >
                🚪 Logout
              </button>
            </li>
          </ul>
        </div>

        {/* ===== Main Content ===== */}
        <div className="col-md-9 col-lg-10 bg-light p-5">

          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 className="fw-bold">Finance Dashboard</h2>
              <p className="text-muted mb-0">
                Track your income, expenses & savings
              </p>
            </div>
            <div className="fw-semibold">
              👋 Welcome, Abhishek
            </div>
          </div>

          {/* ===== Stats Cards ===== */}
          <div className="row g-4 mb-4">

            <div className="col-md-3">
              <div className="card border-0 shadow-sm rounded-4 p-3">
                <h6 className="text-muted">Total Balance</h6>
                <h3 className="fw-bold">₹{balance}</h3>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm rounded-4 p-3">
                <h6 className="text-muted">Total Income</h6>
                <h3 className="fw-bold text-success">₹{income}</h3>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm rounded-4 p-3">
                <h6 className="text-muted">Total Expense</h6>
                <h3 className="fw-bold text-danger">₹{expense}</h3>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm rounded-4 p-3">
                <h6 className="text-muted">Savings</h6>
                <h3 className="fw-bold text-primary">₹{balance}</h3>
              </div>
            </div>

          </div>

          {/* ===== Transactions + Analytics ===== */}
          <div className="row g-4">

            {/* Recent Transactions */}
            <div className="col-md-6">
              <div className="card border-0 shadow-sm rounded-4 p-4">
                <h5 className="fw-semibold mb-3">Recent Transactions</h5>

                <ul className="list-group list-group-flush">
                  {transactions.slice(-4).reverse().map((item) => (
                    <li
                      key={item._id}
                      className="list-group-item d-flex justify-content-between"
                    >
                      {item.category}
                      <span
                        className={
                          item.type === "income"
                            ? "text-success"
                            : "text-danger"
                        }
                      >
                        {item.type === "income" ? "+" : "-"}₹{item.amount}
                      </span>
                    </li>
                  ))}

                  {transactions.length === 0 && (
                    <li className="list-group-item text-center">
                      No transactions found
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* Budget Overview (UNCHANGED) */}
            <div className="col-md-6">
              <div className="card border-0 shadow-sm rounded-4 p-4">
                <h5 className="fw-semibold mb-3">Budget Overview</h5>

                <p className="mb-1">Food & Groceries</p>
                <div className="progress mb-3">
                  <div className="progress-bar bg-success" style={{ width: "70%" }}>
                    70%
                  </div>
                </div>

                <p className="mb-1">Bills & Utilities</p>
                <div className="progress mb-3">
                  <div className="progress-bar bg-warning" style={{ width: "50%" }}>
                    50%
                  </div>
                </div>

                <p className="mb-1">Entertainment</p>
                <div className="progress">
                  <div className="progress-bar bg-danger" style={{ width: "30%" }}>
                    30%
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}