import ButtonCard from "./ButtonCard"

const TableGame = () =>{
    return (
        <div>
        <h1 className="text-4xl font-Principal2 text-white pb-5 text-3d lg:text-7xl text-center xl:ml-[30%] xl:text-start">Memory Game</h1>
        <section className="grid grid-cols-4 bg-white/40 p-5 mx-5 justify-items-center rounded-xl gap-4 md:grid-cols-6 xl:p-10">
            <ButtonCard idButton="1"/>
            <ButtonCard idButton="2"/>
            <ButtonCard idButton="3"/>
            <ButtonCard idButton="4"/>
            <ButtonCard idButton="5"/>
            <ButtonCard idButton="6"/>
            <ButtonCard idButton="7"/>
            <ButtonCard idButton="8"/>
            <ButtonCard idButton="9"/>
            <ButtonCard idButton="10"/>
            <ButtonCard idButton="11"/>
            <ButtonCard idButton="12"/>
            <ButtonCard idButton="13"/>
            <ButtonCard idButton="14"/>
            <ButtonCard idButton="15"/>
            <ButtonCard idButton="16"/>
            <ButtonCard idButton="17"/>
            <ButtonCard idButton="18"/>
            <ButtonCard idButton="19"/>
            <ButtonCard idButton="20"/>
            <ButtonCard idButton="21"/>
            <ButtonCard idButton="22"/>
            <ButtonCard idButton="23"/>
            <ButtonCard idButton="24"/>
        </section>
        </div>
    )
}

export default TableGame