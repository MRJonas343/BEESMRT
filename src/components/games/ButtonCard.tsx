interface ButtonProps{
    idButton : string
}
const ButtonCard: React.FC<ButtonProps> = ({idButton}) => {
    return (
        <div>
            <button id={idButton} className="w-24 h-16 flex justify-center items-center bg-gray-100 hover:scale-110 ease-in-out duration-200 p-1 md:w-28 md:h-24 md:p-2 xl:w-36 xl:p-2 xl:h-36 2xl:w-48 2xl:h-36">
                <img className="min-w-11 max-w-14 md:w-20 md:max-w-3xl xl:w-28"></img>
            </button>
        </div>
    )
}

export default ButtonCard