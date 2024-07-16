function Cards(){
    return(
        <>

    <section>
        <div className="bg-gradient-to-br px-[30%] sm:px-[25%] lg:px-[30%] xl:px-[20%] from-orange-300 justify-items-center to-orange-400 h-full flex flex-wrap p-6 justify-between">
            <div className="">
                <h2 className="text-white text-[2em] w-96 pt-20 font-bold">Organize a sua forma de comprar!</h2>
                <p className="text-white text-lg w-72 pt-4">Crie listas para organizar as suas compras
                de forma a poupar tempo e dinheiro</p>
            </div>
            <div>
                <img src="./public/img/app-compras.svg" className="pr-10" width={"400vw"} alt="" />
            </div>
        </div>
    </section>
    <section>
        <div className="bg-white px-[30%] sm:px-[25%] lg:px-[30%] xl:px-[14%] h-full flex flex-wrap p-6 justify-between">
            <div>
                <img src="./public/img/lista-mulher.svg" className="pr-10 scale-x-[-1]" width={400} alt="" />
            </div>
            <div className="mr-3">
                <h2 className="text-black text-3xl w-70 pt-24 font-bold flex">Crie listas de compras <img className="ml-1 mt-[1.2%]" src="./public/img/list-icon.svg" width={25} alt="" /></h2> 
                <p className="text-la text-zinc-600 w-[45vw] pt-2">
                    Tenha a possibilidade de criar listas de compras individuais ou coletivas.
                     Mantenha a ida ao mercado a mais organizada o possivel, tendo uma lista para cada ocasião.
                    Compare os preços entre produtos e lojas diferentes.</p>
            </div>
        </div>
    </section>

    <section>
        <div className="bg-white grid pl-[5vw] lg:grid-cols-2 sm:grid-cols-1 h-full mt-12">
            <div className="m-auto">
                <h2 className="text-black md:text-5xl sm:text-4xl font-bold flex">Receitas <img className="ml-2 mt-[2%]" src="./public/img/recipe-icon.svg" width={40} alt="" /></h2> 
                <p className="text-md text-zinc-600 mt-3 lg:w-[25vw] pt-2">
                    Encontre a receita que está a procurar.
                    Temos muitas receitas de culinária para todos os níveis, com fotos e explicadas passo a passo.
                    Adicione automaticamente os ingredientes necessários para confecionar as suas receitas à sua lista de compras!
                </p>
            </div>
            <div>

                <img src="./public/img/receita.svg" className="pr-2" width={400} alt="" />
            </div>
        </div>
    </section>
    </>)
}

export default Cards;