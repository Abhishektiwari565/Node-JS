import { useState, useEffect } from "react";
import axios from "axios";
import {base_uri} from '../utils/global_variables.js'

function Transactions() {
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [note, setNote] = useState("");
  const [transactions, setTransactions] = useState([]);

  // 🔹 Add Transaction
  const addTransaction = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      `${base_uri}/transaction/add`,
      {
        type,
        amount,
        category,
        note,
      },
      {
        withCredentials: true,
      }
    );

    if (res.data.status) {
      alert("Transaction Added");
      getTransactions();
      setAmount("");
      setCategory("");
      setNote("");
    }
  };

  // 🔹 Get All Transactions
  const getTransactions = async () => {
    const res = await axios.get(
      `${base_uri}/transaction/get`,
      {
        withCredentials: true,
      }
    );

    if (res.data.status) {
      setTransactions(res.data.transactions);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Transaction</h2>

      {/* 🔹 FORM */}
      <form onSubmit={addTransaction}>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="text"
          placeholder="Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>

      <hr />

      {/* 🔹 SHOW TRANSACTIONS */}
      <h3>All Transactions</h3>

      {transactions.map((item) => (
        <div key={item._id} style={{ marginBottom: "10px" }}>
          <strong>{item.category}</strong> — ₹{item.amount}
          <span style={{ marginLeft: "10px", color: item.type === "income" ? "green" : "red" }}>
            ({item.type})
          </span>
          <div>{item.note}</div>
        </div>
      ))}
    </div>
  );
}

export default Transactions;