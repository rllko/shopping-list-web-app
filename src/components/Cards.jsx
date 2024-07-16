function Cards(){
    return(
        <>

    <section>
        <div className="bg-gradient-to-br flex from-orange-300 flex-wrap space-x-[4%] items ml-auto justify-center to-orange-400 h-full p-6 ">
            <div className="">
                <h2 className="text-amber-50 md:text-[3vw] lg:text-[4.5vw] xl:text-[6vh] text-[5vw] lg:pt-5s font-bold">Organize a sua forma de comprar!</h2>
                <p className="text-white lg:text-[1.7vw] lg xl:text-[2.5vh] md:pt-2 text-center">Crie listas para organizar as suas compras
                de forma a poupar tempo e dinheiro</p>
            </div>
            <div>
                <img src="./img/app-compras.svg" className="h-[50vw] lg:h-[40vw] xl:h-[50vh] lg:pr-10 pr-6" alt="" />
            </div>
        </div>
    </section>
    <section>
        <div className="bg-white px-[30%] sm:px-[25%] lg:px-0 xl:px-[1%] h-full flex flex-wrap space-x-[10%] justify-center">
            <div>
                <img src="./img/lista-mulher.svg" className="h-[50vw] lg:h-[40vw] xl:h-[50vh] xl: lg:pr-10 pr-6 scale-x-[-1]" alt="" />
            </div>
            <div className="">
                <h2 className="md:text-[3vw] lg:text-[3vw] xl:text-[6vh] text-[5vw] lg:pt-20 font-bold flex">Crie listas de compras <img className="md:ml-1 xl:ml-2 xl:mt-[2.5%] md:mt-[1.2%]" src="./img/list-icon.svg" width={40} alt="" /></h2> 
                <p className="text-zinc-600 w-[30vw] pt-2">
                    Tenha a possibilidade de criar listas de compras individuais ou coletivas.
                     Mantenha a ida ao mercado a mais organizada o possivel, tendo uma lista para cada ocasião.
                    Compare os preços entre produtos e lojas diferentes.</p>
            </div>
        </div>
    </section>

    <section className="my-20">
        <div className="bg-white px-[30%] sm:px-[25%] lg:px-[30%] xl:px-[10%] h-full flex flex-wrap space-x-[1%]">
            <div className="m-auto">
                <h2 className="md:text-[3vw] lg:text-[3vw] xl:text-[5vh] text-[5vw] font-bold flex">Receitas <img className="md:ml-1 xl:ml-3 xl:mt-[2.5%] md:mt-[1.2%]" src="./img/recipe-icon.svg" width={40} alt="" /></h2> 
                <p className="text-md text-zinc-600 mt-3 lg:w-[25vw] pt-2">
                    Temos muitas receitas de culinária para todos os níveis, com fotos e explicadas passo a passo.
                    Adicione automaticamente os ingredientes necessários para confecionar as suas receitas à sua lista de compras!
                </p>
            </div>
            <div className="m-0">
                <img src="./img/receita.svg" className="h-[50vw] lg:h-[40vw] xl:h-[35vh] pr-[5vw]" alt="" />
            </div>
        </div>
    </section>
    </>)
}

export default Cards;