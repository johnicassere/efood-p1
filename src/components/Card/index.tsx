import estrela from '../../assets/images/estrela.png'
import { Link } from 'react-router-dom'
import * as S from './styles'


const Card = ({id: idItem , titulo, avaliacao, capa, descricao, tipo, destacado = false}: Restaurante) => {

    
    return(
        <>
            <S.CardContainer>
                <S.Destaque capa={capa}>
                  <S.Links>
                    {destacado ? (
                        <S.LinkItem className='destaque-semana'>
                            <Link to={`/perfil/${idItem?.toString()}`}>Destaque da semana</Link>
                        </S.LinkItem>
                    ) : (
                        <></>
                    )
                    }
                    <S.LinkItem><Link to={`/perfil/${idItem?.toString()}`}>{tipo}</Link></S.LinkItem>
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
                    {descricao}
                    </p>
                    <div className='btn-saiba-mais'>
                        <Link to={`/perfil/${idItem}`}  type='submit'>Saiba Mais</Link>
                    </div>
                </div>
            </S.CardContainer>
        </>
    )
}

export default Card