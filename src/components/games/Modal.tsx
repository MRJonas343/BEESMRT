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
            <div className="bg-white w-[550px] rounded-xl p-7 h-[50vh] absolute z-30 top-1/2 left-1/2 fixPosition">
                <h1>Choose the correct answer</h1>
                <hr/>
                <p>{Question}</p>
                <img className="w-14" src={imageSrc}/>
                <form onSubmit={handleSubmit}>
                    <input name="Answer" type="radio" value={answer1}/>
                    <label>{answer1}</label>
                    <br/>
                    <input name="Answer" type="radio" value={answer2}/>
                    <label>{answer2}</label>
                    <br/>
                    <input name="Answer" type="radio" value={answer3}/>
                    <label>{answer3}</label>
                    <br/>
                    <input name="Answer" type="radio" value={answer4}/>
                    <label>{answer4}</label>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
                <hr/>
            </div>
        </div>
    )
}

export default Modal