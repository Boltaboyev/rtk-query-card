import React from "react"
import {useNavigate, useSearchParams} from "react-router-dom"
import {useGetProductsQuery} from "./api/apiSlice"
import Header from "./components/header"
import Category from "./components/category"
import CardItem from "./components/card"

const App = () => {
    const {data} = useGetProductsQuery()
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()

    const category = searchParams.get("category") || "All"

    const filteredData =
        category === "All"
            ? data
            : data?.filter((product) => product.category === category)

    const handleProductClick = (id) => {
        navigate(`/product-detail/${id}`)
    }

    return (
        <>
            <Header />
            <div className="container2 flex flex-col gap-[20px] py-[20px]">
                <h1 className="opacity-70 font-medium text-2xl">Products</h1>
                <Category />
                <div className="grid grid-cols-4 gap-[20px]">
                    {filteredData?.map((product) => (
                        <div
                            key={product.id}
                            onClick={() => handleProductClick(product.id)}
                            className="cursor-pointer">
                            <CardItem data={product} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default App
