import { Outlet } from "react-router-dom"
import { Header } from "../components"
import { ScrollRestoration } from "react-router-dom"
const HomeLayout = () => {
    return (
        <>
            <ScrollRestoration />
            <Header />
            <Outlet />
        </>
    )
}
export default HomeLayout