import { Restaurantes } from '../../types'
import estrela from '../../assets/images/estrela.png'
import { Link } from 'react-router-dom'
import * as S from './styles'

type Props = {
    id?: number
    titulo?: string
    tipo?: string
    destacado?: boolean
    avaliacao?: string
    capa?: string
    descricao?: string
}


const Card = ({id , titulo, avaliacao, capa, descricao, tipo, destacado = false}:Props) => {

    
    return(
        <>
            <S.CardContainer>
                <S.Destaque capa={capa}>
                  <S.Links>
                    {destacado ? (
                        <S.LinkItem className='destaque-semana'>
                            <Link to="/perfil">Destaque da semana</Link>
                        </S.LinkItem>
                    ) : (
                        <></>
                    )
                    }
                    <S.LinkItem><Link to="/perfil">{tipo}</Link></S.LinkItem>
                  </S.Links>
                </S.Destaque>
                <div>
                        <S.ContainerPontu>
                            <div>
                                <S.Title>{titulo}</S.Title>
                            </div>
                            <div>
                                    <span>{avaliacao}</span>
                                    <img src={estrela} alt="estrela" />
                            </div>
                        </S.ContainerPontu>
                    <p>
                    {/* A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão 
                    fresco e um toque de azeite. Sabor e simplicidade! */}
                    {descricao}
                    </p>
                    <button type='submit'>Saiba Mais</button>
                </div>
            </S.CardContainer>
        </>
    )
}

export default Card