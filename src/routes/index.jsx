import {createBrowserRouter} from "react-router-dom"

// pages
import App from "../App"
import ProductDetail from "../components/product-detail"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/product-detail/:id",
        element: <ProductDetail />,
    },
])
