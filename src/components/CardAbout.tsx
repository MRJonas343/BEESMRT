interface CardAboutProps {
    image: string;
    title: string;
    text: string;
}

const CardAbout: React.FC<CardAboutProps> = ({ image, title, text }) => {
    return (
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex flex-col items-center lg:mr-24 basis-[25%]">
          <img className="w-28 pt-6" src={image} alt={title}/>
          <span className="font-Secundaria font-bold text-2xl py-4">{title}</span>
        </div>
        <p className="font-Secundaria font-semibold basis-[75%] lg:text-xl">{text}</p>
      </div>
    )
}
  
export default CardAbout;