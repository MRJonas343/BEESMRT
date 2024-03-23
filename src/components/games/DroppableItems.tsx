import { useDroppable } from "@dnd-kit/core"

interface DroppableProps{
  idDroppableItem : number
  imgDropped: string | null
  description: string | null
}

const DroppableItem: React.FC<DroppableProps> = ({idDroppableItem, imgDropped, description}) =>{
  
  const {isOver, setNodeRef} = useDroppable({
    id: idDroppableItem,
  })
  
  if(imgDropped === null){
    imgDropped = ""
  }

  let classNameArea = isOver ? "bg-green-500 w-36 h-36" : "bg-blue-500 w-36 h-36"
  
  return (
    <button ref={setNodeRef} className={classNameArea}>
      <img src={imgDropped}/>
      <p>{description}</p>
    </button>
  )
}

export default DroppableItem

