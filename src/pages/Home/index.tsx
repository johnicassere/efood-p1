import { useGetFeaturedRestaurantesQuery } from '../../services/api'
import { ContainerHome } from "./styles"
import Card from "../../components/Card"
import Footer from "../../components/Footer"
import Hero from "../../components/Hero"



const Home = () => {
    const {data} = useGetFeaturedRestaurantesQuery()
     
 if(!data){
    return <h3 style={{textAlign:'center'}}>Carregando...</h3>
 }

    return (
       <>
        <Hero/>
        <ContainerHome>
            {data?.map((item) => (
                <Card
                key={item.id}
                id={item.id}
                destacado={item.destacado}
                titulo={item.titulo} 
                avaliacao={item.avaliacao}
                capa={item.capa}
                descricao={item.descricao.padEnd(275,`.`)}
                tipo={item.tipo}
                /> 
            ))}
        </ContainerHome>
        <Footer/>
       </>
    )
}

export default Home