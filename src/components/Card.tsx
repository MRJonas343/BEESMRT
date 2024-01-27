interface CardProps {
  imageSrc: string;
  title: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, text }) => {
  return (
    <div className="bg-white/70 w-[40vw] flex flex-col items-center max-h-[37vh] overflow-hidden p-5 rounded-2xl ease-in-out duration-200 hover:scale-105 cursor-pointer">
      <img src={imageSrc} alt={title} className="w-3/4 md:w-2/4"/>
      <h2 className="font-Principal text-2xl py-3 text-center text-3d text-white md:text-5xl">{title}</h2>
      <p className=" text-clip overflow-y-auto font-Principal text-l font-thin md:text-2xl">{text}</p>
    </div>
  );
};

export default Card;
