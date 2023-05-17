import  Home  from './sceens/Home';
import TransactionP from './sceens/TransactionsP';
import Exchange from './sceens/Exchange';
import Dashboard from './sceens/Dashboard';
import Area from './components/charts/Area';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/exchange" element={<Exchange />}/>
        <Route path="/area" element={<Area />}/>
        <Route path="/transactions" element={<TransactionP />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
      
    </div>
  )
}

export default App
