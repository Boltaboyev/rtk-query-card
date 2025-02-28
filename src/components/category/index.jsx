import React from "react"
import {useSearchParams} from "react-router-dom"

const categories = [
    "All",
    "Chair",
    "Notebook",
    "Phone",
    "Shoe",
    "Perfume",
    "Chess",
]

const Category = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const handleCategoryClick = (category) => {
        if (category === "All") {
            searchParams.delete("category")
        } else {
            searchParams.set("category", category)
        }
        setSearchParams(searchParams)
    }

    const activeCategory = searchParams.get("category") || "All"

    return (
        <div className="flex justify-between items-center gap-[10px]">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => handleCategoryClick(category)}
                    className={`py-[5px] w-[150px] rounded-lg cursor-pointer ${
                        activeCategory === category
                            ? "text-[#fff] bg-[#7000ff]"
                            : "text-[#7000ff] bg-[#6f00ff1e]"
                    }`}>
                    {category}
                </button>
            ))}
        </div>
    )
}

export default Category
