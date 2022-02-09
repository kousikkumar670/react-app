
function Transactions({customerDetails}) {
   console.log(customerDetails);

       return(<>
       <table>
        <tr>
          <th>Customer Name</th>
          <th>Transacton Date</th>
          <th>Transaction Amount</th>
          <th>Reward Points</th>
        </tr>
       {customerDetails.map((res,index)=>{
                      res.rewards=0;
           if(res.transaction_amount>50 && res.transaction_amount<100){
             res.rewards=(res.transaction_amount-50)*1;
           }else if(res.transaction_amount>100){
            res. rewards=(res.transaction_amount-100)*2+50*1;
           }
            {return (  <tr key={index}>
              <td>{res.first_name}, {res.last_name}</td>
              <td>{res.transaction_date}</td>
              <td >{res.transaction_amount} $</td>
              <td >{res.rewards} $</td>
            </tr>)}
         })}</table></>);
  }

  export default Transactions;