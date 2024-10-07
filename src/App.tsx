import { BrowserRouter} from 'react-router-dom'
import { Globalcss } from "./styles"; 
import Rotas from './routes';
import Cart from './components/Cart';






function App() {
  return (
      <BrowserRouter>
       <Globalcss/>   
          <Rotas/>
          <Cart/>
      </BrowserRouter>
  );
}

export default App;
