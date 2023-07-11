import React, { useState, useEffect } from 'react';
import data from 'api/cards.json';

const Cards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(data);
  }, []);
  return (
    <div className="grid grid-cols-3 mx-auto gap-x-4 mt-10 w-10/12  mb-16">
      {cards.length &&
        cards.map((card) => (
          <div className="bg-white p-14 justify-center  rounded-lg shadow-sm  flex flex-col  items-center  h-[368px] text-center">
            <img
              className="mb-6 w-[150px] justify-center flex"
              src={card.image}
              alt=""
            />
            <h6 className="text-menu-color font-semibold text-xl">
              {card.title}
            </h6>
            <p className="mt-2 text-sm text-gray-500">{card.description}</p>
          </div>
        ))}
    </div>
  );
};

export default Cards;
