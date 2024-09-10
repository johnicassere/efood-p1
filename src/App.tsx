import { Provider } from 'react-redux'
import { BrowserRouter} from 'react-router-dom'
import  store  from './store/'
import { Globalcss } from "./styles"; 
import Rotas from './routes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
       <Globalcss/>
            <Rotas/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
