import  Home  from './sceens/Home';
import TransactionP from './sceens/TransactionsP';
import Exchange from './sceens/Exchange';
import Dashboard from './sceens/Dashboard';
import Balance from './components/dashcomponents/Balance';
import Area from './components/charts/Area';
import Prediction from './components/dashcomponents/Prediction';
import Trans from './components/dashcomponents/Trans';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/exchange" element={<Exchange />}/>
        <Route path="/area" element={<Area />}/>
        <Route path="/transactions" element={<TransactionP />}/>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="balance" element={<Balance />}/>
          <Route path="trans" element={<Trans />}/>
          <Route path="prediction" element={<Prediction />}/>
        </Route>
      </Routes>
      
    </div>
  )
}

export default App
