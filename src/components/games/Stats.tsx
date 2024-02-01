const Stats = () =>{
    return (
    <section className="flex justify-evenly xl:flex-col xl:h-[80vh]">
        <div className="bg-white/80 px-8 py-6 font-Principal2 text-center rounded-xl md:w-56">
            <h2 className="text-2xl mb-5">TURN: </h2>
            <p className="text-xl outline outline-blue-600 rounded-sm p-2 mb-5">PLAYER 1</p>
            <p className="text-xl outline outline-blue-600 rounded-sm p-2">PlAYER 2</p>
        </div>
        <div className="bg-white/80 px-8 py-6 font-Principal2 text-center rounded-xl md:w-56">
            <h2 className="text-2xl mb-5">SCORE</h2>
            <p className="text-xl p-2 mb-2">PlAYER 1: 0</p>
            <p className="text-xl p-2 mb-2">PlAYER 2: 0</p>
            <button className="text-xl bg-red-600 rounded-md p-3 w-full text-white">RESET</button>
        </div>
    </section>
    )
}

export default Stats