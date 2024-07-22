import { useState } from "react";

function NavBar(){
    const [isSidebarEnabled,setIsSidebarEnabled] = useState(false);
    return(
    <main className="sticky top-0 z-50 bg-white ">
        <header className=" flex items-center justify-between w-full xl:max-w-7xl mx-auto">
            <div>
                <img className="p-2 hover:cursor-pointer" src="./img/logo nobg small.png" width={150} alt="" />
            </div>
            <nav className="md:!flex hidden mx-auto"> 
                <div className=" relative flex gap-0 mx-auto items-center justify-center">
                    <div  className="text-lg text-black hover:font-semibold transition-all duration-100 p-4 hover:bg-orange-100/50  h-full hover:cursor-pointer">Home</div>
                    <div  className="text-lg text-black hover:font-semibold transition-all duration-100 p-4 hover:bg-orange-100/50 hover:cursor-pointer">My Lists</div>
                    <div  className="text-lg text-black hover:font-semibold transition-all duration-100 p-4 hover:bg-orange-100/50 hover:cursor-pointer">Recipes</div>
                    <div  className="text-lg text-black hover:font-semibold transition-all duration-100 p-4 hover:bg-orange-100/50 hover:cursor-pointer">About</div>
                </div>
            </nav>
            <div className="flex flex-row items-center grid-cols-2 xl:grid-cols-1">
                <button className="flex justify-center items-center
                 rounded-lg border-2 mr-2 relative w-[50%] sm:w-[50%] md:w-full
                  align-text-top h-full border-black
                   outline-none text-black bg-white 
                   hover:bg-gradient-to-tr cursor-pointer 
                   hover:from-orange-100 shadow-solid hover:to-orange-300 
                   text-md transition-all duration-200 hover:font-bold">
                    Login
                </button>
                <div className="md:hidden flex mx-auto lg:pr-4 right-0 cursor-pointer relative">
                    <div id="mobile-menu-button" onClick={()=>{ setIsSidebarEnabled(!isSidebarEnabled)}} className={`group ${isSidebarEnabled ? "open" : ""}`}>
                        <div className={`bg-black rounded-full relative t w-8 transition-all duration-200 h-1 ${isSidebarEnabled ? "rotate-45 top-2" : ""}`}></div>
                        <div className={`bg-black rounded-full w-8 h-1 transition-all ease-in-out duration-200 my-1 ${isSidebarEnabled ? "-rotate-45 " : ""}`}></div>
                        <div className={`bg-black rounded-full w-8 h-1 ${isSidebarEnabled ? "hidden" :""}`}></div>
                    </div>
                    <div className={`absolute transition-all ${isSidebarEnabled? "block" : "hidden"} z-40 -right-4 w-[calc(100vw+10px)] top-11 text-center bg-white`}>
                    <div  className="text-lg text-black hover:font-semibold h-12 flex items-center justify-center hover:bg-orange-100 hover:cursor-pointer">Home</div>
                    <div  className="text-lg text-black hover:font-semibold h-12 flex items-center justify-center hover:bg-orange-100 hover:cursor-pointer">Lists</div>
                    <div  className="text-lg text-black hover:font-semibold h-12 flex items-center justify-center hover:bg-orange-100 hover:cursor-pointer">Recipes</div>
                    <div  className="text-lg text-black hover:font-semibold h-12 flex items-center justify-center hover:bg-orange-100 hover:cursor-pointer">About</div>
                    </div>
                </div>
            </div>
        </header>
    </main>)
}

export default NavBar;