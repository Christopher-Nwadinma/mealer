import Header from './counter_component/Header'
import Form from './counter_component/Form'
import {useState} from 'react'

const Counter = () => {
  //assuming we sent a request to an api and it fetches the balance from database and returned it to us
  // const balance = 5000; //whenever you have a data that changes in the application, you shouldn't store it in a variable or constant, you should store it in a state variable. because when the data changes, the component will re-render and the new data will be displayed. if we store it in a variable or constant, the component will not re-render and the new data will not be displayed. so we should use useState hook to store the balance in a state variable.
  //balance should be stored inside state: hook e.g
  //const [statename, setState] = useState(initialState); formular 
  const [balance, setBalance] = useState(0); //assuming the zero is coming from the database.


  return (
    <div className="container">
        {/* other components will be rendered here */}
        {/* conditional rendering using tenary operator */}
        {
          balance > 5000? 
          <p className="alert alert-success">You have a good balance</p> 
          : 
          <p className="text-danger">You have a low balance</p>
        }
        <Header balance={balance} />
        <Form balance={balance} setBalance={setBalance} />
    </div>
  )
}

export default Counter