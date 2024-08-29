import * as S from "./styles"
import image from '../../assets/images/image3.png'
import lixeira from '../../assets/images/lixeiraCart.png'

const Cart = () => {
    return (
       <S.CartContainer>
            <S.Overlay/>
                <S.SideCart>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil adipisci, 
                    quas tempore dolorum velit odit sapiente maiores explicabo ullam excepturi 
                    voluptatem delectus laboriosam magni libero doloremque eos aliquid rem illum! 
                    <div>
                        <img src={image} alt="" />
                        <div>
                            <h3>Pizza Marguerita</h3>
                            <span>R$ 60,90</span>
                            <span><a href="/perfil"><img className="lixeira" src={lixeira} alt="" /></a></span>
                        </div>
                    </div>

                    <div>
                        <img src={image} alt="" />
                        <div>
                            <h3>Pizza Marguerita</h3>
                            <span>R$ 60,90</span>
                            <span><a href="/perfil"><img className="lixeira" src={lixeira} alt="" /></a></span>
                        </div>
                    </div>
                    <div>
                        <img src={image} alt="" />
                        <div>
                            <h3>Pizza Marguerita</h3>
                            <span>R$ 60,90</span>
                            <span><a href="/perfil"><img className="lixeira" src={lixeira} alt="" /></a></span>
                        </div>
                    </div>
                    <div className="total-compra">    
                            <h3>Valor Total</h3>
                            <span>R$ 60,90</span>   
                    </div>  
                        <div className="div-btn">
                            <a href="/perfil">Continuar com entrega</a>
                        </div>

                </S.SideCart>

                
       </S.CartContainer>
    )
} 

export default Cart