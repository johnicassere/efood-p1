import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Cardapio, Restaurantes } from '../types'



const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `https://fake-api-tau.vercel.app/api/efood/restaurantes`
    }),

    endpoints: (builder) => ({
        getFeaturedRestaurantes: builder.query<Restaurantes[], void>({
           query: () => '' 
        }),
        getPerfil: builder.query<Restaurantes[], void>({
            query: () => ''
        })
    })   
})

export const { useGetFeaturedRestaurantesQuery, useGetPerfilQuery } = api

export default api



//const api = 'https://fake-api-tau.vercel.app/api/efood/restaurantes'

const figma = 'https://www.figma.com/design/JjduV2Tg713TzYUUsees8b/efood?node-id=1-7&node-type=FRAME&t=KoWZHlFCpA7xxRhh-0'




