interface ModalProps{
    showModal : boolean
    Question : string
    imageSrc : string
    answer1 : string
    answer2 : string
    answer3 : string
    answer4 : string 
    handleSubmit : any
}

const Modal : React.FC <ModalProps> = ({ showModal, Question, answer1, answer2, answer3, answer4, imageSrc, handleSubmit}) =>{

let modalContainer

    if (showModal){
        modalContainer = `fixed top-0 left-0 w-screen h-screen bg-gray-400/60 flex justify-center items-center`
    }else{
        modalContainer = `fixed top-0 left-0 w-screen h-screen bg-gray-400/60 flex justify-center items-center hidden`
    }

    return(
        <div className={modalContainer}>
            <div className="bg-white w-[350px] rounded-xl p-7 h-auto absolute z-30 top-1/2 left-1/2 fixPosition">
                <h1 className="text-xl weigh font-normal font-Principal2 pb-5">Choose the correct answer</h1>
                <hr/>
                <p className="pt-3 text-base font-Secundaria">{Question}</p>
                <img className="flex w-32 mx-auto pt-5 pb-4s" src={imageSrc} alt={`Imagen de ${Question}`} />
                <form className="pt-3" onSubmit={handleSubmit}>
                    <input className="mr-2" name="Answer" type="radio" value={answer1}/>
                    <label className="text-base">{answer1}</label>
                    <br/>
                    <input className="mr-2" name="Answer" type="radio" value={answer2}/>
                    <label className="text-base">{answer2}</label>
                    <br/>
                    <input className="mr-2" name="Answer" type="radio" value={answer3}/>
                    <label className="text-base">{answer3}</label>
                    <br/>
                    <input className="mr-2" name="Answer" type="radio" value={answer4}/>
                    <label className="text-base">{answer4}</label>
                    <br className="pt-3"/>
                    <hr className="pb-5 mt-3"/>
                    <button className="bg-blue-700 text-white py-3 px-5 rounded-lg font-Principal2 text-xl" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Modal