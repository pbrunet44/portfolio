import { NavLink, Outlet } from "react-router";

export default function NavBar() {
    return (
        <>
                <nav className="flex gap-5 justify-end p-4 text-white bg-gray-900/90 text-white">
                    <NavLink to={"/"} className="hover:underline">
                        Home
                    </NavLink>
                    <NavLink to={"/projects"} className="hover:underline">
                        Projects
                    </NavLink>
                </nav>   
            <Outlet />
        </>

    )
}