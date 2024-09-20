import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import CheckoutPagamento from './components/CheckoutPagamento'




const Rotas = () => {

    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/perfil/:id' element={<Perfil />}/>
            {/* <Route path='/pagamento' element={<CheckoutPagamento />}/> */}
        </Routes>
    )
}
export default Rotas