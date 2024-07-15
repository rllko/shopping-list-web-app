function NavBar(){
    return(
    <main className="sticky top-0 bg-white">
        <header className=" top-0 flex items-center justify-between mx-10">
            <div>
                <img className="p-2 shover:cursor-pointer" src="https://i.imgur.com/Loo0bwW.png" width={150} alt="" />
            </div>
            <nav className="xl:!flex hidden "> 
                <div className="flex align-middle gap-4 items-center justify-center">
                    <div  className="text-lg text-black hover:font-bold  hover:cursor-pointer">Pagina Inicial</div>
                    <div  className="text-lg text-black hover:font-bold  hover:cursor-pointer">Minhas Listas</div>
                    <div  className="text-lg text-black hover:font-bold  hover:cursor-pointer">Receitas</div>
                    <div  className="text-lg text-black hover:font-bold  hover:cursor-pointer">Sobre</div>
                </div>
            </nav>
            <button className="flex justify-center items-center rounded-lg border-2 mr-3 relative w-[8vw] align-text-top h-full border-black hover:bg-gradient-to-tr cursor-pointer hover:from-orange-100 shadow-solid hover:to-orange-300 text-md hover:font-bold">
                Login
            </button>
        </header>
    </main>)
}

export default NavBar;