function Cards(){
    return(
        <>

    <section>
        <div className="bg-gradient-to-br flex from-orange-300 flex-wrap space-x-[4%] pt-10 md:pt-0 ml-auto items-center justify-center to-orange-400 h-full p-6 ">
            <div className="">
                <h2 className="text-amber-50 text-[3vh] font-bold
                md:text-[3vw] 
                lg:text-[4.5vw] lg:pt-5 
                xl:text-[6vh] 
                ">Organize a sua forma de comprar!</h2>
                <p className="text-white lg:text-[1.7vw] xl:text-[2.5vh] text-[2vh] md:pt-2 text-center">Crie listas para organizar as suas compras
                de forma a poupar tempo e dinheiro</p>
            </div>
            <div>
                <img src="./img/app-compras.svg" className="h-[105vw] md:h-[50vw] lg:h-[40vw] xl:h-[50vh] lg:pr-10 sm:pr-6" alt="" />
            </div>
        </div>
    </section>

    <section>
        <div className="bg-white flex flex-wrap items-center justify-between px-[10%] 
        sm:w-[100%]
        lg:px-0 lg:w-[80%] 
        md:px-0 md:w-[90%] mx-auto">
            {/* Image div */}
            <div className="md:mx-auto">
                <img src="./img/lista-mulher.svg" className="h-[50vh] pr-6 scale-x-[-1]
                lg:h-[40vw] lg:pr-10
                xl:h-[50vh] 
                sm:h-[70vh]" 
                alt="lista-mulher.svg" />
            </div>
            <div className="lg:w-[35%] mx-auto ">
                <p className="text-[3.5vh] font-bold flex
                md:text-[4vw]
                lg:text-[2.3vw] 
                xl:text-[2.3vw]">
                <span>Crie listas de compras</span> 
                <img className="mt-1 w-5
                md:ml-1 md:mt-[1.2%] md:w-[4vh]
                xl:ml-2 xl:mt-[2.5%] xl:w-10" 
                src="./img/list-icon.svg" alt="" />
                </p> 
                <p className="text-zinc-600 md:w-full text-left xl:text-lg/6 text-lg/5 lg:text-lg/6 pt-4">
                    Tenha a possibilidade de criar listas de compras individuais ou coletivas.<br/>
                     Mantenha a ida ao mercado a mais organizada o possivel, tendo uma lista para cada ocasião.
                </p>
            </div>
        </div>
    </section>

    <section className="my-10 md:py-12">
        <div className="bg-white flex flex-wrap items-center sm:justify-center space-y-2 lg:w-[95%] lg:ml-20 lg:mx-auto space-x-14 justify-between
        md:px-[5%]  
        lg:px-[10%]
        xl:px-[10%]">
            <div className="mx-8">
                <p className=" md:text-[4vw]
                lg:text-[2.3vw] 
                xl:text-[2.3vw] text-[3.5vh] font-bold flex">Receitas<img className="md:ml-1 xl:ml-3 xl:mt-[2.5%] md:mt-[1.2%] ml-1 mt-2 w-6" src="./img/recipe-icon.svg" width={40} alt="" /></p> 
                <p className="text-sm/5 md:text-md xl:text-lg/6 text-zinc-600 mt-3 lg:w-[25vw] sm:text-[2vw]/6 md:pt-2">
                    Temos muitas receitas de culinária para todos os níveis, com fotos e explicadas passo a passo.
                    Adicione automaticamente os ingredientes necessários para confecionar as suas receitas à sua lista de compras!
                </p>
            </div>
            <div className="m-0">
                <img src="./img/receita.svg" className=" sm:h-[100%] sm:w-[100%] md:w-[90vw] lg:w-[20vw] l-auto lg:h-[20vw] xl:h-[35vh] " alt="" />
            </div>
        </div>
    </section>
    </>)
}

export default Cards;