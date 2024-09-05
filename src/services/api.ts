import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `https://fake-api-tau.vercel.app/api/efood/restaurantes`
    }),

    endpoints: (builder) => ({
        getFeaturedRestaurantes: builder.query({
           query: () => 'cart' 
        }) 
    })
})











//const api = 'https://fake-api-tau.vercel.app/api/efood/restaurantes'

const figma = 'https://www.figma.com/design/JjduV2Tg713TzYUUsees8b/efood?node-id=1-7&node-type=FRAME&t=KoWZHlFCpA7xxRhh-0'

//export default api


