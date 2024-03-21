interface KeyProps {
    element: string
}

const Key: React.FC<KeyProps> = ({element})=>{
    return (
        <button className="bg-yellow-300 hover:bg-yellow-500 font-bold p-2 rounded">{element}</button>
    )
}
export default Key