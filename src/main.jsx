import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Blogger from './Blogger'
import Counter from './Counter'
import Invento from './Invento'
//import bootstrap css that was installed
// import "bootstrap/dist/css/bootstrap.css";

const username = "John Doe";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Blogger /> */}
    {/* <Counter /> */}
    <Invento />
  </StrictMode>,

  //jsx : element beign rendered must have a single(root) parent element. so we can use fragment <> </> to wrap the elements. When displaying javascript expressions in JSX, we can use curly braces {}.
  // <> 
  // <h1>Hello, to React! {username}</h1>
  // <p>This is a simple React app {50+50}.</p>
  // </>
)
