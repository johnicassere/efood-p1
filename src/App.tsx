import { Provider } from 'react-redux'
import { BrowserRouter} from 'react-router-dom'
import  store  from './store/'
import { Globalcss } from "./styles"; 
import Rotas from './routes';
import Cart from './components/Cart';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
       <Globalcss/>
            <Rotas/>
            <Cart/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
