import NavBar from "../NavBar"
import { DndContext, KeyboardSensor, MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core"
import { useEffect, useState } from "react"
import DraggableItem from "./DraggableItems"
import DroppableItem from "./DroppableItems"
import ItemsDnDGame from "./itemsDnd.json"
import ModalMessage from "./ModalMessage"
import Trofeo from "./img/trofeo.png"
import React from "react"

const Drag_Drop: React.FC = () => {

  const sensores = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor)
  )

  let copyOfItemsDnDGame = ItemsDnDGame.slice()
  let copyOfItemsDnDGame2 = ItemsDnDGame.slice()

  function showModalWin(){
    setShowModal(!showModal)
  }


  function PlayAgain(){
    setShowModal(false)
    setPoints(0)
    setDroppableAreas(
      sorted1.map((DroppableArea)=>{
        return <DroppableItem key={DroppableArea.id} idDroppableItem={DroppableArea.id} imgDropped={null} description={DroppableArea.description} hasAnItem={false}/>
      })
    )
    setDraggableItems(
      sorted2.map((item)=>{
        return(
          <DraggableItem key={item.id} idDraggableItem={item.id} draggableImgSrc={item.image} shouldDissaperd={false}/>
        )
      })
    )
  }

  function randomIndex(array : object[]) {
    return Math.floor(Math.random() * array.length)
  }

  let sorted1 =copyOfItemsDnDGame.sort(() => randomIndex(ItemsDnDGame) - randomIndex(ItemsDnDGame))
  let sorted2 =copyOfItemsDnDGame2.sort(() => randomIndex(ItemsDnDGame) - randomIndex(ItemsDnDGame))

  const [points, setPoints] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [imageSrc, setImageSrc] = useState("")
  const [mainMessage, setMainMessage] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    if(points === 6){
      showModalWin()
      setImageSrc(Trofeo)
      setMainMessage("Congratulations!")
      setMessage("You have won")
    }
  }, [points])

  const [DroppableAreas, setDroppableAreas] = useState(
    sorted1.map((DroppableArea)=>{
      return <DroppableItem key={DroppableArea.id} idDroppableItem={DroppableArea.id} imgDropped={null} description={DroppableArea.description} hasAnItem={false}/>
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
  
    if(event.over && event.active){
      if(event.over.id === event.active.id){
        setPoints(points + 1)
        let image = ItemsDnDGame[event.active.id-1].image
        
        let newDroppableAreas = DroppableAreas.map((DroppableArea)=>{
          if(DroppableArea.props.idDroppableItem === event.over.id){
            return <DroppableItem key={DroppableArea.props.idDroppableItem} idDroppableItem={DroppableArea.props.idDroppableItem} imgDropped={image} description={null} hasAnItem={true}/>
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
  }
  
  return (
    <main className="w-screen h-screen bg-Gradient1 overflow-x-hidden">
      <NavBar />
      <h1 className="font-Principal text-center text-2xl text-white text-3d" >Drag and Drop</h1>
      
      <DndContext sensors={sensores} onDragEnd={imageDroped} autoScroll={false}>
      <div className="w-[92dvw] h-auto mx-auto mt-4 flex items-center">
        <section className="flex flex-col gap-4 w-dvw items-center">
         {DraggableItems}
        </section>
        <section className="flex flex-col gap-4 w-dvw items-center">
         {DroppableAreas}
        </section>
      </div>
      </DndContext>
      <ModalMessage showModal={showModal} imageSrc={imageSrc} mainMessage={mainMessage} message={message} playAgain={PlayAgain} showModalWin={PlayAgain}/>
    </main>
  )
  
}

export default Drag_Drop