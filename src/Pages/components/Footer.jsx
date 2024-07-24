function Footer(){
    return(<footer className="bg-orange-200 ">
       <div className=" max-w-7xl flex justify-between items-center md:mx-auto mx-[.5em]">
        <div>
            <img className="p-2 l- hover:cursor-pointer" src="./img/logo nobg small.png" width={100} alt="" />
        </div>
        <p className="text-[0.6em] text-zinc-600 md:text-[.8em] text-center">© Copyright 2022 - MixList Corporation</p>
        </div>
    </footer>)
}

export default Footer;