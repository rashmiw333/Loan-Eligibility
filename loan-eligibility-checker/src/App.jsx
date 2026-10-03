import { useState } from "react";

function App() {
  const [income, setIncome] = useState("");
  const [creditScore, setCreditScore] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTerm, setLoanTerm] = useState("");

  const [message, setMessage] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");

  const checkEligibility = () => {
    setMessage("");
    setMonthlyPayment("");

    if (income < 3000) {
      setMessage("Income is too low to qualify for a loan");
    } else if (creditScore < 650) {
      setMessage("Credit score is too low to qualify for a loan");
    } else if (loanAmount > 50000 && loanTerm > 15) {
      const payment = loanAmount / (loanTerm * 12);

      setMonthlyPayment(payment.toFixed(2));
    } else {
      setMessage("Loan cannot be approved due to criteria not met.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="col-md-6 mx-auto">

        <h2 className="text-center mb-4">
          Loan Eligibility Checker
        </h2>

        <div className="mb-3">
          <label className="form-label">
            Monthly Income
          </label>

          <input
            type="number"
            className="form-control"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Credit Score
          </label>

          <input
            type="number"
            className="form-control"
            value={creditScore}
            onChange={(e) => setCreditScore(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Loan Amount
          </label>

          <input
            type="number"
            className="form-control"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            Loan Term (years)
          </label>

          <input
            type="number"
            className="form-control"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary w-100"
          onClick={checkEligibility}
        >
          Check Eligibility
        </button>

        {message && (
          <div className="alert alert-danger mt-3">
            {message}
          </div>
        )}

        {monthlyPayment && (
          <div className="alert alert-success mt-3">
            Monthly Payment: ${monthlyPayment}
          </div>
        )}

      </div>
    </div>
  );
}

export default App;