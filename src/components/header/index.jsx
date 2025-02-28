import React, {useState} from "react"
import {useNavigate} from "react-router-dom"

// icons
import {HiOutlineShoppingCart} from "react-icons/hi2"
import {IoMdHeartEmpty} from "react-icons/io"
import {RiDiscountPercentLine} from "react-icons/ri"
import {TbUserSquareRounded} from "react-icons/tb"
import {useGetProductsQuery} from "../../api/apiSlice"

const Header = () => {
    const [search, setSearch] = useState("")
    const {data: products} = useGetProductsQuery()
    const navigate = useNavigate()

    const filteredProducts = search
        ? products?.filter((product) =>
              product.title.toLowerCase().includes(search.toLowerCase())
          )
        : []

    const handleProductClick = (id) => {
        navigate(`/product-detail/${id}`)
    }

    return (
        <header className="py-[15px] bg-gray-100 relative">
            <div className="container2 flex justify-between items-center gap-[20px]">
                <img
                    src="https://humocard.uz/upload/iblock/241/ltnphls3bex077ar4ihj8bpxare6o09t/uzum.png"
                    alt="logo"
                    className=" w-[140px]"
                />

                <form>
                    <input
                        type="search"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-[450px] border-2 border-[#7000ff] p-[5px_10px] rounded-md outline-none"
                    />
                </form>

                <div className="flex justify-center items-center gap-[25px] text-[25px] text-[#7000ff]">
                    <IoMdHeartEmpty className="cursor-pointer" />
                    <HiOutlineShoppingCart className="cursor-pointer" />
                    <RiDiscountPercentLine className="cursor-pointer" />
                    <TbUserSquareRounded className="cursor-pointer" />
                </div>

                {search && filteredProducts.length > 0 && (
                    <div className="absolute top-[100%] left-1/2 -translate-x-1/2 bg-white w-[500px] border border-gray-200 rounded-md p-2 max-h-[200px] overflow-y-auto z-50">
                        {filteredProducts?.map((product) => (
                            <div
                                key={product.id}
                                onClick={() => handleProductClick(product.id)}
                                className="p-2 hover:bg-gray-100 cursor-pointer flex justify-start items-center gap-[10px]">
                                <img
                                    src={product?.img}
                                    alt={product?.title}
                                    className="h-[50px] w-[50px] object-contain"
                                />
                                {product?.title}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
