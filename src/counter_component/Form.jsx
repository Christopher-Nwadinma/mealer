import {useState} from 'react'

const Form = ({balance, setBalance}) => {
    //create a state to handle the amount to withdraw or deposit
    const [amount, setAmount] = useState("");

    function handleWithdraw() {
        if (amount > balance) {
            alert('insufficient funds');
            setAmount(""); // this will clear the input field after withdrawing the money
            return;
        }
        // logic to withdraw money from the balance
        // balance = balance - 1000; // assuming we withdraw 1000; this is wrong, a child component cannot change the state of a parent component, we need to use a callback function to update the balance in the parent component
        setBalance(balance - amount); // this is the correct way to update the balance in the parent component
        // console.log(balance);
        // alert('You have withdrawn money from your account');
        setAmount(""); // this will clear the input field after withdrawing the money
    }

  return (
    <div className="row py-5">
      <div className="col-md-2 offset-md-3 py-2">
        <button className="btn btn-warning" onClick={handleWithdraw}> Withdraw </button>
      </div>

      <div className="col-md-2 py-2">
        {/* this input will handle the amount to withdraw or deposit */}
        <input type="number" className="form-control py-3" value={amount} onChange={
            function(e){
                console.log(e)
                setAmount(e.target.value)
            }
        } />
      </div>

      <div className="col-md-2 py-2">
        <button className="btn btn-primary" onClick={
            function(){
                // balance = balance + 1000
                // console.log(balance)
                // alert('You have deposited money to your account ' + balance)
                setBalance(balance + Number(amount)) // this is the correct way to update the balance in the parent component
                setAmount("") // this will clear the input field after depositing the money
            }
        }>Deposit</button>
      </div>
    </div>
  )
}

export default Form