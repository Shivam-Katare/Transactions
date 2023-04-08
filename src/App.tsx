import React, { useState, useEffect } from "react";
import "./App.css";
import { Transaction, getTransactions } from "./components/services/MockAPI";
import Table from "./components/Table";

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getTransactions({ page: 1 })
      .then((result) => {
        console.log(result); // check the response in the console
        setTransactions(result.data);
      })
      .catch((error) => {
        console.log(error); // check the error in the console
        setError(error.message || "An error occurred");
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      <div className="contains">
        <div>
          <h1>Transactions</h1>
        </div>

        <div className="table-component" id="style-4">
          {transactions.length === 0 ? (
            <div>Loading...</div>
          ) : (
            <Table data={transactions} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
