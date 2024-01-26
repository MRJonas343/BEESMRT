interface CardProps {
  imageSrc: string;
  title: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, text }) => {
  return (
    <div className="bg-white/70 w-[40vw] flex flex-col items-center p-5 rounded-2xl ">
      <img src={imageSrc} alt={title} className="w-3/4"/>
      <h2 className="font-Principal text-3xl py-3 text-3d text-white">{title}</h2>
      <p className="font-Principal text-xl font-thin">{text}</p>
    </div>
  );
};

export default Card;
