import Card from "../../components/Card"
import Footer from "../../components/Footer"
import Hero from "../../components/Hero"
import ProductList from "../../components/ProductList"
import { ContainerHome } from "./styles"

const Home = () => {

    
    return (
       <>
        <Hero/>
        <ContainerHome>
            <Card destacado={true} />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <ProductList/>
        </ContainerHome>
        <Footer/>
       </>
    )
}

export default Home