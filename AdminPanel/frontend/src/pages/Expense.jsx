import { useState, useEffect } from "react";
import axios from "axios";


export default function Expense() {
  const [amount, setAmount] = useState("");
  const [title, setTitle] = useState("");
  const [transactions, setTransactions] = useState([]);

  const addExpense = async (e) => {
    e.preventDefault();

    const res = await axios.post(
     `${base_uri}/transaction/add`,
      {
        title,
        amount,
        type: "expense",   // 👈 ONLY difference from income
      },
      { withCredentials: true }   // 👈 VERY IMPORTANT
    );

    if (res.data.status) {
      alert("Expense Added");
      getTransactions(); // refresh list
      setTitle("");
      setAmount("");
    }
  };

  const getTransactions = async () => {
    const res = await axios.get(
      "http://localhost:4000/get-transactions",
      { withCredentials: true }
    );

    if (res.data.status) {
      // show only expense
      const expenseData = res.data.transactions.filter(
        (item) => item.type === "expense"
      );

      setTransactions(expenseData);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div>
      <h2>Expense</h2>

      <form onSubmit={addExpense}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button type="submit">Add Expense</button>
      </form>

      <hr />

      {transactions.map((item) => (
        <div key={item._id}>
          <h4>{item.title}</h4>
          <p>₹ {item.amount}</p>
        </div>
      ))}
    </div>
  );
}
