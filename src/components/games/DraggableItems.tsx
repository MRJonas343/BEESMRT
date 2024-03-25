import { useDraggable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"
import { useState, useEffect } from "react"

interface DraggableItemProps{
  idDraggableItem : number
  draggableImgSrc : string | null 
  shouldDissaperd : boolean
}

const DraggableItem: React.FC<DraggableItemProps> =({idDraggableItem, draggableImgSrc, shouldDissaperd}) =>{

  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: idDraggableItem,
  })


  let [classNameItem, setClassNameItem] = useState("")

  useEffect(() => {
    if(!shouldDissaperd){
      setClassNameItem("elevetedButton bg-white/70 rounded-lg flex items-center justify-center w-40 h-24")
    }else{
      setClassNameItem("hidden")
    }
  }, [shouldDissaperd])

  const style = {
    transform: CSS.Transform.toString(transform),
  }

  if(draggableImgSrc === null){
    draggableImgSrc = ""
  }
  

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes} className={classNameItem}>
      <img src={draggableImgSrc} className="w-20 h-20 p-2"/>
    </div>
  )
}

export default DraggableItem