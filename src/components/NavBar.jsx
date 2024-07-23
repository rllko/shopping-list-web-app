import { useState } from "react";

function NavBar(){
    const [isSidebarEnabled,setIsSidebarEnabled] = useState(false);
    return(
    <main className="sticky top-0 z-50 bg-white ">
        <header className=" flex items-center justify-between w-full max-w-[95%] sm:max-w-2xl md:max-w-5xl xl:max-w-7xl 2xl:max-w-[90%] md:mx-auto">
            <div>
                <img className="p-2 ml-[.5em] hover:cursor-pointer" src="./img/logo nobg small.png" width={150} alt="" />
            </div>
            <nav className="md:!flex hidden "> 
                <div className=" relative flex gap-0 mx-auto items-center justify-center">
                    <div  className="text-lg text-black hover:font-semibold transition-all duration-100 p-5 hover:bg-orange-100/50 h-full hover:cursor-pointer">Login</div>
                    <div  className="text-lg text-black hover:font-semibold transition-all duration-100 p-5 hover:bg-orange-100/50 hover:cursor-pointer">My Lists</div>
                    <div  className="text-lg text-black hover:font-semibold transition-all duration-100 p-5 hover:bg-orange-100/50 hover:cursor-pointer">Recipes</div>
                    <div  className="text-lg text-black hover:font-semibold transition-all duration-100 p-5 hover:bg-orange-100/50 hover:cursor-pointer">About</div>
                </div>
       
            </nav>
            <div className="flex md:hidden flex-row items-center">

                <div className="md:hidden flex mx-auto lg:pr-4 -right-3 cursor-pointer relative mt-1 mr-[.5em]">
                    <div id="mobile-menu-button"  onClick={()=>{ setIsSidebarEnabled(!isSidebarEnabled)}} className={`group ${isSidebarEnabled ? "open" : ""}`}>
                        <div className={`bg-black rounded-full relative t w-8 transition-all duration-200 h-1 ${isSidebarEnabled ? "rotate-45 top-2" : ""}`}></div>
                        <div className={`bg-black rounded-full w-8 h-1 transition-all ease-in-out duration-200 my-1 ${isSidebarEnabled ? "-rotate-45 " : ""}`}></div>
                        <div className={`bg-black rounded-full w-8 h-1 ${isSidebarEnabled ? "hidden" :""}`}></div>
                    </div>
                    <div className={`absolute transition-all ${isSidebarEnabled? "block" : "hidden"} z-40 -right-4 w-[calc(100vw+10px)] top-11 text-center bg-white`}>
                    <div  className="text-lg text-black hover:font-semibold h-12 flex items-center justify-center hover:bg-orange-100 hover:cursor-pointer">Login</div>
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