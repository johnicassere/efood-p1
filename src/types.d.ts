export type Cardapio = {
    id?: number
    nome?: string
    foto?: string
    preco?: string
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
    cardapio?: string[]
}
