import React, { useState, useEffect } from "react";
import axios from "axios";

const User = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/chain"
      )
      .then(response => {
        //   get data off chain
        setData(response.data.chain);

        console.log("response", response.data);
      });
  }, []);
  console.log("data", data)
  // the [] means you only want it it to load once

  return (

    <div>
      {/* <div className="App"> */}
        <h2>USER INFO</h2>
        {console.log("data map", data)}

    {/* where are transactions being stored/created?? */}
        {data && data.map(block => {
                return(
                    block.transactions.map(transaction => {
                return <>
                    <h1>Recipient: {transaction.recipient}</h1>
                    <h1>Sender: {transaction.sender}</h1>
                    <h1>Amount: {transaction.amount}</h1>
                    </>
                }))
            })} 

      </div>
    // </div>
  );
};
export default User; 
