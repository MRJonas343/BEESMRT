// TableGame.tsx
import { useState, useEffect } from "react";
import ButtonCard from "./ButtonCard";

const TableGame = () => {
  const initialOrder = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12];

  const [currentOrder, setCurrentOrder] = useState<number[]>([]);
  const [currentResult, setCurrentResult] = useState<number | null>(null);

  useEffect(() => {
    setCurrentOrder(initialOrder.sort(() => Math.random() - 0.5));
  }, []); // Se ejecuta solo una vez al montar el componente

  function uncover(id: number) {
    setCurrentResult(id);
  }

  return (
    <div>
      <h1 className="text-4xl font-Principal2 text-white pb-5 text-3d lg:text-7xl text-center xl:ml-[30%] xl:text-start">
        Memory Game
      </h1>

      <section className="grid grid-cols-4 bg-white/40 p-5 mx-5 justify-items-center rounded-xl gap-4 md:grid-cols-6 xl:p-10">
        {currentOrder.map((num, index) => (
          <ButtonCard 
            key={index} 
            idButton={index} 
            imgSrc={`/src/components/games/img/${currentResult === index ? num : "back"}.png`} uncover={uncover} />
        ))}
      </section>
    </div>
  );
};

export default TableGame;


