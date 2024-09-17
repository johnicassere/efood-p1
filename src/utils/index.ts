export const parseToBrl = (amount = 0) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(amount)
}

export const precoTotal = (items: Cardapio[]) => {
    return items.reduce((accumulador, valorAtual) => {
        if(valorAtual.preco){
        return (accumulador += valorAtual.preco)
        }
        return 0
    }, 0)
   }