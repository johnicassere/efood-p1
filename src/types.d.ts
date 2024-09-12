declare interface Cardapio {
    id?: number | undefined
    nome?: string | undefined
    foto?: string | undefined
    preco?: number | undefined
    descricao: string
    porcao?: string | undefined
}

declare type Restaurante = {
    id: number
    titulo: string
    tipo?: string 
    destacado: boolean
    avaliacao: string
    descricao: string
    capa: string
    cardapio?: Cardapio[]
}
