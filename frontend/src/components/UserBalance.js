import React, { useState, useEffect } from 'react';
import axios from 'axios'

const UserBalance = () => {
    
    const [data, setState] = useState({
        "amount": 0,
        "sender": "",
        "recipient": ""
    })
    // const [defaultBalance, setDefaultBalance] = useState({"amount": 100})
    const [balance, setBalance] = useState(null)
    const handleChange = e => {
        setState({
        //   ...state,
            [e.target.name]: e.target.value
        });
      };
    const handleSubmit = e => {
        e.preventDefault()
        axios.post(`http://localhost:5000/transactions/new`)
        .then(response => {
            // console.log('data',res.data)
            let firstAmount = response.data.amount[0].amount
            let amount = response.data.amount
            .map(item => item.amount)
            .slice(1)
            .reduce((prev, next) => parseInt(prev) + parseInt(next))
            // console.log('firstAmount',firstAmount)
            // console.log('amount',amount)

            setBalance(firstAmount - amount)
        })
        
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/balance`)
        .then(response => {
            console.log('GET BALANCE', response.data)
            console.log('data',response.data)
            let firstAmount = response.data.amount[0].amount
            let allAmounts = response.data.amount.map(item => item.amount)
            if (allAmounts.length === 1) {
                setBalance(firstAmount)
            } else {
                allAmounts = allAmounts
                    .slice(1)
                    .reduce((prev, next) => parseInt(prev) + parseInt(next))
                setBalance(firstAmount - allAmounts)
            }
            console.log(allAmounts)

        })
    }, [])


    return ( 
    <>
        <h1>Balance: {balance}</h1>
        <p>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Amount"
                    name="amount"
                    value={data.amount}
                    onChange={handleChange}

                />
                <input
                    placeholder="Sender"
                    name="sender"
                    value={data.sender}
                    onChange={handleChange}

                />
                <input
                    placeholder="Recipient"
                    name="recipient"
                    value={data.recipient}
                    onChange={handleChange}

                />
            <button type="submit">Send</button>
            </form>
        </p>
    </>
     );
}
 
export default UserBalance;