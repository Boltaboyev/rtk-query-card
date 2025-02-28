import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_BASE_URL}`,
    }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "/products",
        }),
    }),
})

export const {useGetProductsQuery} = apiSlice
export default apiSlice
