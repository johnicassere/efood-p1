import { useEffect, useState } from "react"
import Card from "../../components/Card"
import Footer from "../../components/Footer"
import Hero from "../../components/Hero"
import ProductList from "../../components/ProductList"
import { ContainerHome } from "./styles"
import { Restaurantes } from "../../types"

const Home = () => {
    const [restaurantes, setRestaurantes] = useState<Restaurantes[]>([])

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
        .then(res => res.json())
        .then(json => {
            setRestaurantes(json);     
        })
        .catch(error => console.log(error))
        
    },[])
    
    return (
       <>
        <Hero/>
        <ContainerHome>
            {restaurantes.map((item) => (
                <Card
                key={item.id} 
                id={item.id}
                destacado={item.destacado}
                titulo={item.titulo} 
                avaliacao={item.avaliacao}
                capa={item.capa}
                descricao={item.descricao}
                tipo={item.tipo}
                />
            ))}

            <ProductList/>
        </ContainerHome>
        <Footer/>
       </>
    )
}

export default Home