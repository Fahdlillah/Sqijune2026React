// import React, { useEffect ,useState } from 'react';

// const Currencyconverter = () => {
//     const [currency, setCurrency] = useState([]);

//     useEffect(()=>{
//         fetch('https://openexchangerates.org/api/')
//         .then((res)=> res.json())
//         .then((data)=> setCurrency(data))
//         console.log(currency)
//     }, []);
//     return (
//         <>
//             {currency.map(curr => (
//                 <div key={curr.id}>
//                     <p>{curr.title}</p>
//                    <img src={curr.image} alt={curr.title} />
//                 </div>
//             ))}
import { useState, useEffect } from "react";
import "../App.css";

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("NGN");
  const [result, setResult] = useState(null);

  const currencies = [
    "USD",
    "NGN",
    "EUR",
    "GBP",
    "CAD",
    "JPY",
    "AUD",
  ];

  const convertCurrency = async () => {
    try {
      const response = await fetch(
        `https://openexchangerates.org/api/latest.json?app_id=fb775d67fbb14eeca48306802db41c65`
        // `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      console.log(response);

      const data = await response.json();
      setResult(data.rates[toCurrency]);
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
    }
  };

  useEffect(() => {
    convertCurrency();
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div className="converter">
      <h2>Currency Converter</h2>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        {currencies.map((currency) => (
          <option key={currency}>{currency}</option>
        ))}
      </select>

      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        {currencies.map((currency) => (
          <option key={currency}>{currency}</option>
        ))}
      </select>

      <h3>
        {amount} {fromCurrency} = {result} {toCurrency}
      </h3>
    </div>
  );
}

export default CurrencyConverter;