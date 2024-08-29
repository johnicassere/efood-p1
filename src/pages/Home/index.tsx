import Card from "../../components/Card"
import Footer from "../../components/Footer"
import Hero from "../../components/Hero"
import { ContainerHome } from "./styles"

const Home = () => {
    return (
       <>
        <Hero/>
        <ContainerHome className="container">
            <Card destaque={true}/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </ContainerHome>
        <Footer/>
       </>
    )
}

export default Home