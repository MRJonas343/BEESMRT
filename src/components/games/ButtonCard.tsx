// ButtonCard.tsx
import { useState } from "react";

interface ButtonProps {
  idButton: number;
  imgSrc?: string;
  uncover: (id: number) => void; // Función para destapar la carta en TableGame
}

const ButtonCard: React.FC<ButtonProps> = ({ idButton, imgSrc, uncover }) => {
  const [isUncover, setIsUncover] = useState(false);

  const handleClick = () => {
    setIsUncover(!isUncover); // Cambiar el estado al hacer clic
    uncover(idButton); // Llamar a la función de destape en TableGame
  };

  return (
    <div>
      <button
        onClick={handleClick}
        id={idButton.toString()}
        className="w-24 h-16 flex justify-center items-center bg-gray-100 hover:scale-110 ease-in-out duration-200 p-1 md:w-28 md:h-24 md:p-2 xl:w-36 xl:p-2 xl:h-36 2xl:w-48 2xl:h-36"
        >

        <img 
          src={isUncover ? imgSrc : "/src/components/games/img/back.png"} 
          className="min-w-11 max-w-14 md:w-20 md:max-w-3xl xl:w-28" 
          alt="" 
          />
      </button>
    </div>
  );
};

export default ButtonCard;

