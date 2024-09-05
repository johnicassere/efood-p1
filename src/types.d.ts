export interface Cardapio  {
    id?: number
    nome?: string
    foto?: string
    preco?: number
    descricao?: string
    porcao?: string
    open?: boolean
    close?: boolean
}

export type Restaurantes = {
    id?: number
    titulo?: string
    tipo?: string 
    destacado?: boolean
    avaliacao?: string
    descricao: string
    capa?: string
    cardapio?: Cardapio[]
}
