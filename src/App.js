import './App.css';
import Transactions from './Transactions';
import api from './api/TransactionDetails';
import { useState,useEffect } from 'react';

function App() {
  const [customerDetails, setCustomerDetail]=useState([]);

  //fetch data
  const reteriveData=async ()=>{
    const response=await api.get("/transaction_details");
    return response.data;
  }
  useEffect(()=>{
    const getData=async ()=>{
      const custmers= await reteriveData();
      if(custmers) setCustomerDetail(custmers);
    };
    getData();
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <Transactions customerDetails={customerDetails}></Transactions>
      </header>
    </div>
  );
}



export default App;
