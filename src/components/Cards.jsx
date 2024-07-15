function Cards(){
    return(
        <>
    <section>
        <div className="bg-gradient-to-br px-[30%] sm:px-[25%] lg:px-[30%] xl:px-[25%] from-orange-300 justify-items-center to-orange-400 h-full flex flex-wrap p-6 justify-between">
            <div className="">
                <h2 className="text-white text-[2em] w-96 pt-20 font-bold">Organize a sua forma de comprar!</h2>
                <p className="text-white text-lg w-72 pt-4">Crie listas para organizar as suas compras
                de forma a poupar tempo e dinheiro</p>
            </div>
            <div>
                <img src="https://raw.githubusercontent.com/rllko/RecieptsWebApp/25e2bc12889992f983724ff38481216e17a65c5a/src/assets/img/app-compras.svg?token=BHWSEI3N2K4WTZ76FRL6ILTGSWF2I" className="pr-10" width={"400vw"} alt="" />
            </div>
        </div>
    </section>
    <section>
        <div className="bg-white px-[30%] sm:px-[25%] lg:px-[30%] xl:px-[14%] h-full flex flex-wrap p-6 justify-between">
            <div>
                <img src="https://raw.githubusercontent.com/rllko/RecieptsWebApp/25e2bc12889992f983724ff38481216e17a65c5a/src/assets/img/lista-mulher.svg?token=BHWSEI6ZJAEHQLM7ASVEHJDGSWF3W" className="pr-10 scale-x-[-1]" width={400} alt="" />
            </div>
            <div className="mr-3">
                <h2 className="text-black text-3xl w-70 pt-24 font-bold flex">Crie listas de compras <img className="ml-1 mt-[2%]" src="./src/assets/img/list-icon.svg" width={25} alt="" /></h2> 
                <p className="text-la text-zinc-600 w-[45vw] pt-2">
                    Tenha a possibilidade de criar listas de compras individuais ou coletivas.
                     Mantenha a ida ao mercado a mais organizada o possivel, tendo uma lista para cada ocasião.
                    Compare os preços entre produtos e lojas diferentes.</p>
            </div>
        </div>
    </section>
    <section>
        <div className="bg-white px-[30%] sm:px-[25%] lg:px-[30%] xl:px-[17%] h-full flex mt-12 flex-wrap p-6 justify-between">
            <div className="mr-10">
                <h2 className="text-black text-[2em] w-96 font-bold flex">Receitas <img className="ml-1 mt-[2%]" src="./src/assets/img/recipe-icon.svg" width={25} alt="" /></h2> 
                <p className="text-md text-zinc-600 w-[39vw] pt-2">
                Encontre a receita que está a procurar.
Temos muitas receitas de culinária para todos os níveis, com fotos e explicadas passo a passo.
Adicione automaticamente os ingredientes necessários para confecionar as suas receitas à sua lista de compras!</p>
            </div>
            <div>
                <img src="https://raw.githubusercontent.com/rllko/RecieptsWebApp/25e2bc12889992f983724ff38481216e17a65c5a/src/assets/img/recipe-icon.svg?token=BHWSEI2RP54RD526TYVOQPLGSWF4Y" className="pr-10 w-96"  alt="" />
            </div>
        </div>
    </section>
    </>)
}

export default Cards;