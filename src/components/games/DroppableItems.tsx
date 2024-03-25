import { useDroppable } from "@dnd-kit/core"
import { useState,useEffect } from "react"

interface DroppableProps{
  idDroppableItem : number
  imgDropped: string | null
  description: string | null
  hasAnItem : boolean
}

const DroppableItem: React.FC<DroppableProps> = ({idDroppableItem, imgDropped, description, hasAnItem}) =>{
  
  const {setNodeRef} = useDroppable({
    id: idDroppableItem,
  })
  
  if(imgDropped === null){
    imgDropped = ""
  }

  let [classNameArea, setClassNameArea] = useState("")
  let [classNameP, setClassNameP] = useState("")

  useEffect(() => {
    if(hasAnItem){
      setClassNameArea("bg-white p-4 rounded-lg w-40 h-24 flex justify-center items-center outline-Pink1 outline lg:w-36 lg:h-36")
      setClassNameP("hidden")
    }else{
      setClassNameArea("bg-white p-4 rounded-lg w-40 h-24 outline outline-Yellow3 lg:w-36 lg:h-36")
      setClassNameP("font-Principal text-lg tracking-wide")
    }
  }, [hasAnItem])

  return (
    <button ref={setNodeRef} className={classNameArea}>
      <img src={imgDropped} className="w-16"/>
      <p className={classNameP}>{description}</p>
    </button>
  )
}

export default DroppableItem

