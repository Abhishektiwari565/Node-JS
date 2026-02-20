import React, { useState } from "react";

const Income = () => {
  const [incomeList, setIncomeList] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const addIncome = () => {
    if (!title || !amount) return;

    const newIncome = {
      id: Date.now(),
      title,
      amount: Number(amount),
    };

    setIncomeList([...incomeList, newIncome]);
    setTitle("");
    setAmount("");
  };

  const deleteIncome = (id) => {
    setIncomeList(incomeList.filter((item) => item.id !== id));
  };

  const totalIncome = incomeList.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

  return (
    <div className="container">
      <h2>Income Page</h2>

      <input
        type="text"
        placeholder="Income Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addIncome}>Add Income</button>

      <h3>Total Income: ₹{totalIncome}</h3>

      <ul>
        {incomeList.map((item) => (
          <li key={item.id}>
            {item.title} - ₹{item.amount}
            <button onClick={() => deleteIncome(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Income;