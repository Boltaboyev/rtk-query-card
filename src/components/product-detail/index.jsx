import React from "react"
import {useNavigate, useParams} from "react-router-dom"

import {useGetProductsQuery} from "../../api/apiSlice"
import {TiStar} from "react-icons/ti"

const ProductDetail = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const {data: products} = useGetProductsQuery()

    const product = products?.find((item) => item.id === id)

    return (
        <div className="container2 flex items-center justify-center h-screen">
            <div className="flex justify-center items-center gap-[10px] w-[80%]">
                <img
                    src={product?.img}
                    alt={product?.title}
                    className="w-80 h-80 object-contain rounded-2xl"
                />

                <div className="flex flex-col gap-3 justify-center items-start">
                    <h1 className="text-2xl font-bold">{product?.title}</h1>
                    <div className="text-lg">
                        <p className="text-gray-500 line-through">
                            {product?.oldPrice.toLocaleString()} UZS
                        </p>
                        <p className="text-green-500 font-semibold text-2xl">
                            {product?.price.toLocaleString()} UZS
                        </p>
                    </div>

                    <div className="flex justify-start items-center gap-[5px]">
                        <TiStar className="text-orange-400" />
                        <small className=" opacity-70">
                            {Math.round(Math.random() * 4 + 1)}
                        </small>
                        <small className=" opacity-70">
                            ({Math.round(Math.random() * 300)} sharhlar)
                        </small>
                    </div>

                    <p className="text-gray-500">
                        Category:{" "}
                        <span className="text-purple-700 font-medium">
                            {product?.category}
                        </span>
                    </p>

                    <button className="bg-[#7000ff] text-white rounded-sm cursor-pointer p-[5px_20px] active:scale-95 hover:bg-[#5c00cc] transition">
                        Add to Cart
                    </button>

                    <button
                        className="hover:text-[#7000ff] cursor-pointer underline"
                        onClick={() => navigate(-1)}>
                        Back to products
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
