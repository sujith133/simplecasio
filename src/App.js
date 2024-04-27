import TextField from '@mui/material/TextField';
import './App.css';
import { Button } from '@mui/material';
import {useState} from 'react';

function App() {
  const [rate,setRate]=useState('')
  const [amount,setAmount]=useState('')
  const [tenure,setTenure]=useState('')
  const [payable,setPayable]=useState('')
  const [callLogs,setCallLogs]=useState([['rate','amount','tenure','total Amount']])
  const tenureChanged=(event)=>{
    setTenure(event.target.value)
  } 
  const rateChanged=(event)=>{
    setRate(event.target.value)
  } 
  const amountChanged=(event)=>{
    setAmount(event.target.value)
  } 
  const calculateIntrest =()=>{
    setPayable(parseInt(amount)+(rate*amount*tenure)/100)
    setCallLogs([...callLogs,[rate,amount,tenure,payable]])
    console.log(payable,callLogs)
    setCallLogs([...callLogs,[rate,amount,tenure,parseInt(amount)+(rate*amount*tenure)/100]])
  }
  return (
    <div className='bg-container'>
      <h1>Simple Intrest Calculator</h1>
      
      <div className='rowdivContainer'>
      <TextField
          required
          id="outlined-number"
          label="Amount"
          type='number'
          sx={{width:'40%', margin:3, minWidth:250}}
          value={amount}
          onChange={(event)=>amountChanged(event)}
        />
        <TextField
          required
          id="outlined-number"
          type='number'
          label="tenure in years"
          sx={{width:'40%', margin:3, minWidth:250}}
          value={tenure}
          onChange={(event)=>tenureChanged(event)}
        />
        <TextField
          required
          id="outlined-number"
          type='number'
          label="rate of interest"
          sx={{width:'40%', margin:3, minWidth:250}}
          value={rate}
          onChange={(event)=>rateChanged(event)}
        />
        <TextField
          required
          id="outlined-read-only-input"
          label="amount to be paid"
          type='number'
          
          sx={{width:'40%', margin:3, minWidth:250}}
          value={payable}
          
        />
        <Button onClick={calculateIntrest} sx={{width:'40%', margin:3}} variant='contained'>Calculate</Button>
      </div>
      <ul className='rowdivContainer scroll'>
        {callLogs.map(each=>(
          <li className='rowContainer'>
            <h5>{each[0]}</h5>
            <h5>{each[1]}</h5>
            <h5>{each[2]}</h5>
            <h5>{each[3]}</h5>
          </li>
        ))}
      </ul>
          </div>
  );
}

export default App;
