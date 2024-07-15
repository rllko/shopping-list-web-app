function NavBar(){
    return(
    <main className="sticky top-0 bg-white">
        <header className=" top-0 flex items-center justify-between">
            <div>
                <img className="p-2 hover:cursor-pointer" src="https://github.com/rllko/RecieptsWebApp/blob/master/src/assets/img/logo%20nobg%20small.png?raw=true" width={150} alt="" />
            </div>
            <nav> 
                <div className="flex align-middle gap-4 items-center justify-center">
                    <div  className="text-black hover:font-bold  hover:cursor-pointer">Pagina Inicial</div>
                    <div  className="text-black hover:font-bold  hover:cursor-pointer">Minhas Listas</div>
                    <div  className="text-black hover:font-bold  hover:cursor-pointer">Receitas</div>
                    <div  className="text-black hover:font-bold  hover:cursor-pointer">Sobre</div>
                </div>
            </nav>
            <button className="flex justify-center items-center rounded-lg border-2 mr-3 relative w-[8vw] align-text-top h-[3vw] border-black hover:bg-gradient-to-tr cursor-pointer hover:from-orange-100 shadow-solid hover:to-orange-300 text-md hover:font-bold">
                Login
            </button>
        </header>
    </main>)
}

export default NavBar;