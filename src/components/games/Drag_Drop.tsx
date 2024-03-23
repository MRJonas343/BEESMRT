import NavBar from "../NavBar"
import { DndContext } from "@dnd-kit/core"
import { useState } from "react"
import DraggableItem from "./DraggableItems"
import DroppableItem from "./DroppableItems"
import ItemsDnDGame from "./itemsDnd.json"
import React from "react"

const Drag_Drop: React.FC = () => {

  let copyOfItemsDnDGame = ItemsDnDGame.slice()
  let copyOfItemsDnDGame2 = ItemsDnDGame.slice()

  function randomIndex(array : object[]) {
    return Math.floor(Math.random() * array.length)
  }

  let sorted1 =copyOfItemsDnDGame.sort(() => randomIndex(ItemsDnDGame) - randomIndex(ItemsDnDGame))
  let sorted2 =copyOfItemsDnDGame2.sort(() => randomIndex(ItemsDnDGame) - randomIndex(ItemsDnDGame))


  const [DroppableAreas, setDroppableAreas] = useState(
    sorted1.map((DroppableArea)=>{
      return <DroppableItem key={DroppableArea.id} idDroppableItem={DroppableArea.id} imgDropped={null} description={DroppableArea.description}/>
   })
  )

  const [DraggableItems, setDraggableItems] = useState(
    sorted2.map((item)=>{
      return(
        <DraggableItem key={item.id} idDraggableItem={item.id} draggableImgSrc={item.image} shouldDissaperd={false}/>
      )
     })
  )

  function imageDroped(event : any){
  
    if(event.over.id === event.active.id){

      let image = ItemsDnDGame[event.active.id-1].image
      
      let newDroppableAreas = DroppableAreas.map((DroppableArea)=>{
        if(DroppableArea.props.idDroppableItem === event.over.id){
          return <DroppableItem key={DroppableArea.props.idDroppableItem} idDroppableItem={DroppableArea.props.idDroppableItem} imgDropped={image} description={null}/>
      }else{
          return DroppableArea
      }
    })
      setDroppableAreas(newDroppableAreas)
      setDraggableItems(
        DraggableItems.map((item) => {
          if (item.props.idDraggableItem === event.active.id) {
            return React.cloneElement(item, { draggableImgSrc: null, shouldDissaperd: true})
          } else {
            return item
          }
        })
      )
    }
  }
  
  return (
    <main className="w-screen h-screen bg-Gradient1 overflow-x-hidden">
      <NavBar />
      <DndContext onDragEnd={imageDroped}>
      <div className="flex">
        <section className="flex flex-col gap-6 w-dvw">
         {DroppableAreas}
        </section>
        <section className="flex flex-col gap-6 w-dvw mt-10">
         {DraggableItems}
        </section>
        </div>
      </DndContext>
    </main>
  )
  
}

export default Drag_Drop