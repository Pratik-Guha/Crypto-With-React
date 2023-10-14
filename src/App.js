import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { CoinDetails, Coins, Exchanges, Footer, Header, Home } from './components';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coins' element={<Coins/>}/> 
       <Route path='/exchanges' element={<Exchanges/>}/> 
       <Route path='/coin/:id' element={<CoinDetails/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
