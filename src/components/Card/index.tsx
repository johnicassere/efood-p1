import * as S from './styles'
import estrela from '../../assets/images/estrela.png'
import { Link } from 'react-router-dom'

type Props = {
    destaque?: boolean
}

const Card = ({ destaque = false }:Props) => {
    return(
        <>
            <S.CardContainer>
                <div className='destaque'>
                  <S.Links>
                    {destaque ? (
                        <S.LinkItem className='destaque-semana'>
                            <Link to="/perfil">Destaque da semana</Link>
                        </S.LinkItem>
                    ) : (
                        <></>
                    )
                    }
                    <S.LinkItem><Link to="/perfil">Japonesa</Link></S.LinkItem>
                  </S.Links>
                </div>
                <div>
                        <S.ContainerPontu>
                            <div>
                                <S.Title>Hioki Sushi</S.Title>
                            </div>
                            <div>
                                    <span>4.7</span>
                                    <img src={estrela} alt="estrela" />
                            </div>
                        </S.ContainerPontu>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium sunt, 
                        ut praesentium cumque itaque debitis voluptas repellat quia eaque expedita 
                        recusandae! Distinctio, voluptas. Minima distinctio repellat perspiciatis, 
                        architecto eveniet accusamus.
                    </p>
                    <button type='submit'>Saiba Mais</button>
                </div>
            </S.CardContainer>
        </>
    )
}

export default Card