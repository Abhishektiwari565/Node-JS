import { useState, useEffect } from "react";
import axios from "axios";
import { base_uri } from "../utils/global_variables";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [note, setNote] = useState("");
  const [type, setType] = useState("income");

  const getTransactions = async () => {
    const res = await axios.get(
      `${base_uri}/transaction/get`,
      { withCredentials: true }
    );

    if (res.data.status) {
      setTransactions(res.data.transactions);
    }
  };

  const addTransaction = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      `${base_uri}/transaction/add`,
      { amount, category, note, type },
      { withCredentials: true }
    );

    if (res.data.status) {
      getTransactions();
      setAmount("");
      setCategory("");
      setNote("");
    }
  };

  const deleteTransaction = async (id) => {
    await axios.delete(
      `${base_uri}/transaction/delete?id=${id}`,
      { withCredentials: true }
    );
    getTransactions();
  };

  useEffect(() => {
    getTransactions();
  }, []);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + Number(t.amount), 0);

  const balance = income - expense;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Transactions Dashboard</h2>

      {/* ===== Summary Cards ===== */}
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card text-white bg-success">
            <div className="card-body">
              <h5>Total Income</h5>
              <h4>₹ {income}</h4>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-white bg-danger">
            <div className="card-body">
              <h5>Total Expense</h5>
              <h4>₹ {expense}</h4>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-white bg-primary">
            <div className="card-body">
              <h5>Balance</h5>
              <h4>₹ {balance}</h4>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Add Transaction Form ===== */}
      <div className="card mb-4">
        <div className="card-header">Add Transaction</div>
        <div className="card-body">
          <form onSubmit={addTransaction}>
            <div className="row g-3">
              <div className="col-md-2">
                <select
                  className="form-select"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </div>

              <div className="col-md-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>

              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>

              <div className="col-md-1">
                <button type="submit" className="btn btn-primary w-100">
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* ===== Transactions Table ===== */}
      <div className="card">
        <div className="card-header">Transaction History</div>
        <div className="card-body table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>Category</th>
                <th>Note</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((item) => (
                <tr key={item._id}>
                  <td>{item.category}</td>
                  <td>{item.note}</td>
                  <td>
                    <span
                      className={`badge ${
                        item.type === "income"
                          ? "bg-success"
                          : "bg-danger"
                      }`}
                    >
                      {item.type}
                    </span>
                  </td>
                  <td>₹ {item.amount}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteTransaction(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {transactions.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center">
                    No transactions found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}