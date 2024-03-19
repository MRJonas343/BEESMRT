import BackCardImg from './img/back.png'

interface ButtonProps {
  card: any
  flipped: boolean
  chooseCard: any
}

const ButtonCard: React.FC<ButtonProps> = ({ card, flipped, chooseCard }) => {
  const cardHandleClick = () => chooseCard(card)

  let classCard = `card ${flipped ? 'matched' : ''} p-1 w-20 h-14 bg-gray-100 flex relative justify-center items-center  md:w-28 md:h-24 md:p-2 xl:w-36 xl:p-2 xl:h-36 2xl:w-48 2xl:h-36  cursor-pointer`

  return (
    <div className={classCard} onClick={cardHandleClick}>
      <img className="cardImg min-w-11 max-w-14 md:w-20 md:max-w-3xl xl:w-28 absolute" alt="" src={card.src} />
      <img className="cardBack min-w-11 max-w-14 md:w-20 md:max-w-3xl xl:w-28 absolute hover:scale-110 duration-200 ease-in-out" src={BackCardImg} />
    </div>
  )
}

export default ButtonCard

