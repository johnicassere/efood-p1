import { useEffect, useState } from "react"
import { Restaurantes } from "../../types"


const ProductList = () => {
    const [restaurantes, setRestaurantes] = useState<Restaurantes[]>([])

    
    useEffect(() => {

        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
        .then(res => res.json())
        .then(data => setRestaurantes(data))
    },[])

    
    return (
        <></>
    )
}


export default ProductList