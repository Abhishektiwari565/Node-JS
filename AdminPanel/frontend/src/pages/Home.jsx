import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
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
              <Link to="/dashboard" className="nav-link text-white">
                📊 Dashboard
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
              <Link to="/" className="nav-link text-danger">
                🚪 Logout
              </Link>
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
                <h3 className="fw-bold">₹1,25,500</h3>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm rounded-4 p-3">
                <h6 className="text-muted">Monthly Income</h6>
                <h3 className="fw-bold text-success">₹52,000</h3>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm rounded-4 p-3">
                <h6 className="text-muted">Monthly Expense</h6>
                <h3 className="fw-bold text-danger">₹28,300</h3>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm rounded-4 p-3">
                <h6 className="text-muted">Savings</h6>
                <h3 className="fw-bold text-primary">₹23,700</h3>
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
                  <li className="list-group-item d-flex justify-content-between">
                    Salary Credit <span className="text-success">+₹50,000</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between">
                    Grocery Shopping <span className="text-danger">-₹2,300</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between">
                    Electricity Bill <span className="text-danger">-₹1,500</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between">
                    Freelance Payment <span className="text-success">+₹12,000</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Budget Overview */}
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
