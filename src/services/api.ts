import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Produto = {
    id: number
    preco: number
}


type PurchasePayload = {
    products: Produto[],
    delivery: {
        receiver: string
        address: {
            description: string,
            city: string,
            zipCode: string
            number: number,
            complement: string
        }
    },
    payment?: {
        card: {
            name: string
            number: string
            code: number,
            expires:{
                month: number,
                year: number
            }
        }
    }

}


const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `https://fake-api-tau.vercel.app/api/efood`
    }),

    endpoints: (builder) => ({
        getFeaturedRestaurantes: builder.query<Restaurante[], void>({
           query: () => '/restaurantes' 
        }),
        getRestaurante: builder.query<Restaurante, string | undefined>({
            query: (id) => `/restaurantes/${id}` 
         }),
        getPerfil: builder.query<Restaurante, string | undefined>({
            query: (id) => `restaurantes/${id}`
        }),
        purchase: builder.mutation<any, PurchasePayload>({
            query: (body) => ({
                url: '/checkout',
                method: 'POST',
                body: body

            })
        })
    })   
})

export const { useGetFeaturedRestaurantesQuery, 
    useGetPerfilQuery,useGetRestauranteQuery,
    usePurchaseMutation } = api

export default api



//const api = 'https://fake-api-tau.vercel.app/api/efood/restaurantes'

//const figma = 'https://www.figma.com/design/JjduV2Tg713TzYUUsees8b/efood?node-id=1-7&node-type=FRAME&t=KoWZHlFCpA7xxRhh-0'

//const apiCheckout = 'https://fake-api-tau.vercel.app/api/efood/checkout'


