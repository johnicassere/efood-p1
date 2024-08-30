import * as S from "./styles"
import image from '../../assets/images/image3.png'

const Produto = () => {
    return(
       <>
        <S.ContainerProduto>
            <a href="/"><img src={image} alt="Pizza" /></a>
            <h2>Pizza Marguerita</h2>
            <p>
            A clássica Marguerita: molho de tomate suculento, mussarela derretida, 
            manjericão fresco e um toque de azeite. Sabor e simplicidade!
            </p>
           <div className="adicionar">
                <a href="/">Adicionar ao carrinho</a>
           </div>
        </S.ContainerProduto>
       </>
    )
}


export default Produto