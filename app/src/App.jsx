import  Home  from './sceens/Home';
import TransactionP from './sceens/TransactionsP';
import Exchange from './sceens/Exchange';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/exchange" element={<Exchange />}/>
        <Route path="/transactions" element={<TransactionP />}/>
      </Routes>
      
    </div>
  )
}

export default App
