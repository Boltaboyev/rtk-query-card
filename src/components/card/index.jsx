import React from "react"

// icons
import {TiStar} from "react-icons/ti"
import {HiOutlineShoppingBag} from "react-icons/hi2"
import {IoMdHeartEmpty} from "react-icons/io"

const CardItem = ({data}) => {
    return (
        <div className="flex flex-col h-full justify-between gap-[8px] border relative border-gray-200 p-[10px] rounded-lg">
            <IoMdHeartEmpty className=" absolute top-[20px] right-[20px] text-[26px] opacity-60 hover:opacity-100 hover:text-red-500 cursor-pointer" />

            <img
                src={data?.img}
                alt={data?.title}
                className="h-[340px] w-full object-contain rounded-2xl"
            />

            <p className="font-medium leading-[120%]">{data?.title}</p>

            <div className="flex justify-start items-center gap-[5px]">
                <TiStar className="text-orange-400" />
                <small className=" opacity-70">
                    {Math.round(Math.random() * 4 + 1)}
                </small>
                <small className=" opacity-70">
                    ({Math.round(Math.random() * 300)} sharhlar)
                </small>
            </div>

            <div className="flex justify-between items-center gap-[10px]">
                <div className="flex flex-col leading-[120%]">
                    <p className="text-[13px] opacity-60 line-through">
                        {data?.oldPrice.toLocaleString().replace(/,/g, " ")}{" "}
                        so'm
                    </p>
                    <p className="font-medium text-[18px]">
                        {data?.price.toLocaleString().replace(/,/g, " ")} so'm
                    </p>
                </div>

                <button className="h-[40px] w-[40px] rounded-full flex justify-center items-center border-1 outline-none hover:text-[#7000ff] transition duration-[.2s] cursor-pointer">
                    <HiOutlineShoppingBag />
                </button>
            </div>
        </div>
    )
}

export default CardItem
