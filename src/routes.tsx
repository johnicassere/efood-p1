import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Cart from './components/Cart'
import Modal from './components/Modal'


const Rotas = () => {

    return(
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/perfil' element={<Perfil/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/modal/:id' element={<Modal />}/></Routes>
    )
}
export default Rotas