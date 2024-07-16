function Footer(){
    return(<footer className="bg-orange-200 flex justify-between px-16 items-center">
        <div>
            <img className="p-2 l- hover:cursor-pointer" src="https://i.imgur.com/Loo0bwW.png" width={100} alt="" />
        </div>
        <p className="text-[1em] text-center">© Copyright 2022 - MixList Corporation</p>
        <button className=
        "flex text-[1em] my-2 bg-transparent sm:hidden md:hidden lg:block \
         items-start justify-start px-5 rounded-lg border-2 mr-3 \
         w-[100] align-text-top h-[5vh] border-black \
         hover:bg-gradient-to-tr cursor-pointer hover:from-orange-100 \
         shadow-solid hover:to-orange-300 text-md hover:font-bold">
        Registra-te gratuitamente
        </button>
    </footer>)
}

export default Footer;