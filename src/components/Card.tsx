interface CardProps {
  imageSrc: string
  title: string
  text: string
}

const Card: React.FC<CardProps> = ({ imageSrc, title, text }) => {
  return (
    <div className="bg-white/70 w-[43vw] flex flex-col items-center overflow-hidden p-5 rounded-2xl ease-in-out duration-200 hover:scale-105 hover:bg-yellow-400 cursor-pointer 2xl:w-[22vw] 2xl:h-[50vh]">
      <img src={imageSrc} alt={title} className="w-36 md:max-w-28 xl:max-w-48"/>
      <h2 className="font-Principal text-2xl py-3 text-center text-3d text-white md:text-4xl">{title}</h2>
      <p className=" text-clip overflow-y-auto font-Principal text-l font-thin md:text-2xl">{text}</p>
    </div>
  )
}

export default Card
