import { Link } from "react-router-dom";
import logo from '../../Assets/Images/logo.png'

const NavBar = () => {
    return (
        <div>
            <nav className="bg-[#F39300] bg-opacity-75 rounded-full  ml-10 mr-10 mt-6 border-gray-200 shadow-md ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
                    <Link className="flex items-center">
                        <img src={logo}  className=" h-[3rem]  w-[3rem]" alt="logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                        TastyTracks
                        </span>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
