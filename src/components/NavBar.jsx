import { useState } from "react";

function NavBar(){
    const [isSidebarEnabled,setIsSidebarEnabled] = useState(false);
    return(
    <main className="sticky top-0 bg-white">
        <header className=" top-0 flex items-center justify-between ml-5 mr-1 xl:ml-10">
            <div>
                <img className="p-2 hover:cursor-pointer" src="./img/logo nobg small.png" width={150} alt="" />
            </div>
            <nav className="xl:!flex hidden"> 
                <div className="flex align-middle gap-4 items-center justify-center">
                    <div  className="text-lg text-black hover:font-bold  h-full hover:cursor-pointer">Pagina Inicial</div>
                    <div  className="text-lg text-black hover:font-bold  hover:cursor-pointer">Minhas Listas</div>
                    <div  className="text-lg text-black hover:font-bold  hover:cursor-pointer">Receitas</div>
                    <div  className="text-lg text-black hover:font-bold  hover:cursor-pointer">Sobre</div>
                </div>
            </nav>
            <div className="flex flex-row items-center space-x-3 xl:grid-cols-1">
                <button className="flex justify-center items-center rounded-lg border-2 mr-3 relative w-[8vh] align-text-top h-full border-black hover:bg-gradient-to-tr cursor-pointer hover:from-orange-100 shadow-solid hover:to-orange-300 text-md hover:font-bold">
                    Login
                </button>
                <div className="xl:hidden flex ml-auto pr-4 cursor-pointer relative">
                    <div id="mobile-menu-button" onClick={()=>{ setIsSidebarEnabled(!isSidebarEnabled)}} className={`group ${isSidebarEnabled ? "open" : ""}`}>
                        <div className={`bg-black rounded-full relative t w-8 transition-all duration-200 h-1 ${isSidebarEnabled ? "rotate-45 top-2" : ""}`}></div>
                        <div className={`bg-black rounded-full w-8 h-1 transition-all ease-in-out duration-200 my-1 ${isSidebarEnabled ? "-rotate-45 " : ""}`}></div>
                        <div className={`bg-black rounded-full w-8 h-1 ${isSidebarEnabled ? "hidden" :""}`}></div>
                    </div>
                    <div className={`absolute transition-all ${isSidebarEnabled? "block" : "hidden"} -right-1 w-80 top-11 text-center bg-white`}>
                    <div  className="text-lg text-black hover:font-bold h-12 flex items-center justify-center hover:bg-zinc-100 hover:cursor-pointer">Pagina Inicial</div>
                    <div  className="text-lg text-black hover:font-bold h-12 flex items-center justify-center hover:bg-zinc-100 hover:cursor-pointer">Minhas Listas</div>
                    <div  className="text-lg text-black hover:font-bold h-12 flex items-center justify-center hover:bg-zinc-100 hover:cursor-pointer">Receitas</div>
                    <div  className="text-lg text-black hover:font-bold h-12 flex items-center justify-center hover:bg-zinc-100 hover:cursor-pointer">Sobre</div>
                    </div>
                </div>
            </div>
        </header>
    </main>)
}

export default NavBar;