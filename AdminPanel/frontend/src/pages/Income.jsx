import { useState, useEffect } from "react";
import axios from "axios";
import { base_uri } from "../utils/global_variables.js";

export default function Income() {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [note, setNote] = useState("");
  const [transactions, setTransactions] = useState([]);

  const addIncome = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      `${base_uri}/transaction/add`,
      {
        amount,
        category,
        note,
        type: "income",   // 👈 THIS IS IMPORTANT
      },
      { withCredentials: true }
    );

    if (res.data.status) {
      alert("Income Added");
      getTransactions();
      setAmount("");
      setCategory("");
      setNote("");
    }
  };

  const getTransactions = async () => {
    const res = await axios.get(
      "http://localhost:4000/get-transactions",
      { withCredentials: true }
    );

    if (res.data.status) {
      const incomeData = res.data.transactions.filter(
        (item) => item.type === "income"
      );

      setTransactions(incomeData);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div>
      <h2>Income</h2>

      <form onSubmit={addIncome}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category (Salary, Freelance...)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          type="text"
          placeholder="Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />

        <button type="submit">Add Income</button>
      </form>

      <hr />

      {transactions.map((item) => (
        <div key={item._id}>
          <h4>{item.category}</h4>
          <p>₹ {item.amount}</p>
          <small>{item.note}</small>
        </div>
      ))}
    </div>
  );
}
