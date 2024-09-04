import { BrowserRouter} from 'react-router-dom'
import { Globalcss, Container } from "./styles"; 
import Rotas from './routes';

function App() {
  return (
   <BrowserRouter>
   <Globalcss/>
   <Container className="App">
      <Rotas/>
    </Container>
   </BrowserRouter>
  );
}

export default App;
