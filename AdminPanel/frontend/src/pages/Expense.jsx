import React, { useState } from "react";

const Expense = () => {
  const [expenseList, setExpenseList] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    if (!title || !amount) return;

    const newExpense = {
      id: Date.now(),
      title,
      amount: Number(amount),
    };

    setExpenseList([...expenseList, newExpense]);
    setTitle("");
    setAmount("");
  };

  const deleteExpense = (id) => {
    setExpenseList(expenseList.filter((item) => item.id !== id));
  };

  const totalExpense = expenseList.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

  return (
    <div className="container">
      <h2>Expense Page</h2>

      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addExpense}>Add Expense</button>

      <h3>Total Expense: ₹{totalExpense}</h3>

      <ul>
        {expenseList.map((item) => (
          <li key={item.id}>
            {item.title} - ₹{item.amount}
            <button onClick={() => deleteExpense(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Expense;