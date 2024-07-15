function Cards(){
    return(
        <>
    <section className="bg-gradient-to-br px-[15vw] grid lg:grid-cols-2 from-orange-400 justify-items-center to-orange-500 h-full justify-between">
        <div className="m-auto lg:ml-40 sm:my-auto">
            <h2 className="text-white lg:text-5xl sm:text-4xl font-bold">Organize a sua forma de comprar!</h2>
            <p className="text-white text-lg w-[39vw] sm:w-[100%] lg:w-[25vw] pt-4">
                Crie listas para organizar as suas compras
                de forma a poupar tempo e dinheiro
            </p>
        </div>
        <div className="md:!block hidden">
            <img src="./src/assets/img/app-compras.svg" className="pr-10" width={500} alt="" />
        </div>
    </section>

    <section className="bg-white grid lg:grid-cols-2 sm:grid-cols-1 mx-[15vw] h-full py-6 justify-between">
        <div className="col-span-1">
            <img src="./src/assets/img/lista-mulher.svg" className="pr-10 mx-auto scale-x-[-1]" width={500} alt="" />
        </div>
        <div className="m-auto">
            <h2 className="text-black m-auto lg:text-5xl sm:text-4xl font-bold flex">Crie listas de compras <img className="ml-2 mt-[2%]" src="./src/assets/img/list-icon.svg" width={30} alt="" /></h2> 
            <p className="text-md lg:text-lg mt-3 text-zinc-600 lg:w-[25vw] pt-2">
                Tenha a possibilidade de criar listas de compras individuais ou coletivas.
                Mantenha a ida ao mercado a mais organizada o possivel, tendo uma lista para cada ocasião.
                Compare os preços entre produtos e lojas diferentes.
            </p>
        </div>
    </section>

    <section>
        <div className="bg-white grid pl-[10vw] lg:grid-cols-2 mx-[8vw] sm:grid-cols-1 h-full mt-12">
            <div className="m-auto">
                <h2 className="text-black md:text-5xl sm:text-4xl font-bold flex">Receitas <img className="ml-2 mt-[2%]" src="./src/assets/img/recipe-icon.svg" width={40} alt="" /></h2> 
                <p className="text-md text-zinc-600 mt-3 lg:w-[25vw] pt-2">
                    Encontre a receita que está a procurar.
                    Temos muitas receitas de culinária para todos os níveis, com fotos e explicadas passo a passo.
                    Adicione automaticamente os ingredientes necessários para confecionar as suas receitas à sua lista de compras!
                </p>
            </div>
            <div>
                <img src="./src/assets/img/receita.svg" className="mx-auto" width={500} alt="" />
            </div>
        </div>
    </section>
    </>)
}

export default Cards;