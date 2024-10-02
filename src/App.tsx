import { BrowserRouter} from 'react-router-dom'
import { Globalcss } from "./styles"; 
import Rotas from './routes';
import Cart from './components/Cart';
import Checkout from './components/Checkout';





function App() {
  return (
      <BrowserRouter>
       <Globalcss/>   
          <Rotas/>
          <Cart/>
          <Checkout/>
      </BrowserRouter>
  );
}

export default App;
