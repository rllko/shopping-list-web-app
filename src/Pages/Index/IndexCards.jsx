import { Link } from "react-router-dom";

function Cards(){
    
    return(
    <div className="grid grid-rows-[1fr,.9fr,0.8fr] overflow-hidden gap-0 bg-white ">
        <section className="bg-gradient-to-br from-orange-300 border-b-[1px] border-zinc-200 sm:border-0 to-orange-400">
            <div className="flex justify-center h-full text-wrap items-center flex-wrap md:flex-nowrap 
                            xl:mt-0 xl:justify-center mx-auto xl:max-w-7xl 2xl:w-[70%] w-[85%]">
                <h2 className="text-amber-50 w-92 xl:w-[56%] md:w-[100%] text-center font-bold sm:mb-0">
                    Organize your next shopping spree
                </h2>
                <div>
                    <img src="./img/app-compras.svg" className="w-[60%] mx-auto md:w-80 xl:w-72" alt="" />
                </div>
            </div>
        </section>

        <section className="min-h-[45vh] md:min-h-[45vh]">
            <div className="flex mt-[1vh] justify-center mx-auto items-center flex-wrap
                            md:flex-nowrap 
                            xl:justify-center xl:max-w-6xl md:w-[90%] lg:w-[62%] 2xl:w-[60%]">
                <div className="">
                    <img src="./img/lista-mulher.svg" className="w-56 md:w-80 md:pr-6 scale-x-[-1]" 
                    alt="lista-mulher.svg" />
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-zinc-600 text-center my-1 text-base md:text-xl md:w-[90%] w-[60%] 2xl:w-[80%] mb-4 xl:text-xl 2xl:text-2xl lg:text-lg/6 md:pt-4">
                        Create a digital list to organize your shopping and save time and paper.
                    </p>
                    <Link to={'/shopping-list-web-app/register'} className= 
                    "text-sm mt-2 md:text-base xl:text-base mb-2 bg-transparent lg:block \
                    px-5 rounded-lg border-2 align-text-top border-black \
                    hover:bg-gradient-to-tr cursor-pointer text-black hover:from-orange-100 \
                    shadow-solid hover:to-orange-300 text-md hover:font-bold">
                        Plan your next journey
                    </Link>
                </div>
            </div>
        </section>
    <section className="relative h-full md:m-0 ">
        <div className="flex h-full space-x-4 md:space-x-0 mx-auto items-center flex-wrap
                        md:flex-nowrap 
                        xl:justify-center xl:max-w-6xl w-[90%] sm:w-full md:w lg:w-[62%] 2xl:w-[60%]">

                <p className="text-zinc-600 text-left md:mx-10 p-1 lg:mx-0 
                md:text-xl text-xl/7 z-10  bg-white/90 rounded-lg w-[90%] md:w-[55%] xl:px-36 2xl:px-0 xl:w-[50%] 2xl:mx-20 xl:text-xl lg:text-lg/6 md:pt-4">
                    Never run out of ideas with our large list of recipes that range from a simple cake to the best pasta.
                </p>
            <div className=" my-4">
                <img src="./img/receita.svg" className="absolute top-[12.5%]  block md:static -right-[40%]  md:w-92 md:initial md:block w-[40vh] " alt="" />
            </div>
            </div>
    </section>
    </div>)
}

export default Cards;