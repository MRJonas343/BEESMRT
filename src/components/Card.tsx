interface CardProps {
  imageSrc: string
  title: string
  text: string
}

const Card: React.FC<CardProps> = ({ imageSrc, title, text }) => {
  return (
    <div className="bg-white/70 w-[43vw] flex flex-col items-center overflow-hidden p-5 rounded-2xl ease-in-out duration-200 hover:scale-105 hover:bg-yellow-400 cursor-pointer md:h-[37vh] lg:w-[22vw] lg:h-[50vh]">
      <img src={imageSrc} alt={title} className="w-32"/>
      <h2 className="font-Principal text-xl py-3 text-center text-3d text-white md:text-2xl">{title}</h2>
      <p className="text-base text-clip overflow-y-auto font-Principal font-thin lg:text-lg">{text}</p>
    </div>
  )
}

export default Card
