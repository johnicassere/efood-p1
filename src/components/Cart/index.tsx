import * as S from "./styles"
import image from '../../assets/images/image3.png'
import lixeira from '../../assets/images/lixeiraCart.png'
import Perfil from "../../pages/Perfil"
import { Link } from "react-router-dom"

const Cart = () => {
    return (
       <>
        <Perfil/>
        <S.CartContainer>
            <S.Overlay/>
                <S.SideCart>

                    <div className="container-cart">
                        <div>
                             <img src={image} alt="" />
                        </div>
                            <div>
                                <h3>Pizza Marguerita</h3>
                                <span>R$ 60,90</span>
                            </div>
                            
                            <div>
                                <Link to="/">
                                    <img className="lixeira" style={{width: '16px', height:'16px'}} src={lixeira} alt="" />
                                </Link>
                            </div>
                    </div>

                    <div className="total-compra">    
                            <h3>Valor Total</h3>
                            <span>R$ 60,90</span>   
                    </div>  

                        <div className="div-btn">
                            <a href="/">Continuar com entrega</a>
                        </div>
                </S.SideCart> 
       </S.CartContainer>
       </>
    )
} 

export default Cart