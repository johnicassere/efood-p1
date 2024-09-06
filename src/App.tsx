import { Provider } from 'react-redux'
import { BrowserRouter} from 'react-router-dom'
import  store  from './store/'
import { Globalcss, Container } from "./styles"; 
import Rotas from './routes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
       <Globalcss/>
          <Container className="App">
            <Rotas/>
          </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
