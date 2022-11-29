import { useContext } from "react";
import Web3Context, { Web3Provider } from "../../Context/Web3Context";
import { Link } from "react-router-dom";
import "../Loader/style.css";
const Navbar = () => {
    const { account, extensionSetup } = useContext(Web3Context);
    return (
        <div className="default-theme">
    <nav
        class="flex items-center justify-between flex-wrap bg-black py-4 lg:px-12 shadow border-solid border-t-2 border-blue-500">
        <div class="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
            <div class="flex items-center flex-shrink-0 text-gray-800 mr-4">
                <Link to="/" class="font-semibold text-xl tracking-tight">Reefket | A NFT Marketplace on Reef Blockchain</Link>
            </div>

            <div class="block lg:hidden ">
                <button
                    id="nav"
                    class="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
        </div>

        <div class="menu flex-grow lg:flex justify-around lg:items-center lg:w-auto lg:px-8 px-8">
        </div>
        <div class="menu lg:flex lg:items-center  lg:px-3 px-8">
            <div class="text-md font-bold items-center  text-blue-700 ">
                <Link to="/myCollections"
                    class="block mt-4 lg:inline-block lg:mt-0 text-blue-500 px-4 py-2 rounded  mr-2">
                    Collections
                </Link>
                <Link to="/explore"
                    class=" block mt-4 lg:inline-block lg:mt-0 text-blue-500 px-4 py-2 rounded  mr-2">
                    Explore
                </Link>

            </div>


            <button
                onClick={() => { extensionSetup() }}
                class="block w-48 truncate text-md px-4 py-2 rounded text-white ml-2 font-bold hover:text-white mt-4 hover:bg-red-800 bg-blue-500 lg:mt-0">{account ? account?.toString() : "Connect To Wallet"}</button>


        </div>

    </nav >
    </div>);
}
export default Navbar;