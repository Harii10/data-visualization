import { useEffect, useState } from "react";
import axios from "axios";
import { BsBuildings } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { GiDatabase } from "react-icons/gi";

function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get("https://jonsnow7.pythonanywhere.com/list/").then((response) => {
      const tranformedData = response.data;
      setCards(tranformedData);
    });
  });

  const dataSets = [
    {
      name: "Materials",
      count: cards.length,
      icon: <BsBuildings />,
    },
    {
      name: "Construction Cost",
      count: 34,
      icon: <RiMoneyDollarCircleFill />,
    },
    {
      name: "Data of Material",
      count: 10,
      icon: <GiDatabase />,
    },
  ];

  return (
    <div className="hidden lg:block xl:block 2xl:block bg-main-10">
      <div className="flex gap-28 ml-6">
        {dataSets.map((items) => (
          <div className="flex justify-between items-center w-80 h-24 p-5 shadow-lg rounded-xl border border-gray-300 bg-white">
            <h1 className="text-2xl">{items.name}</h1>
            <span className="text-3xl bg-pink-600 rounded-full text-white p-3">
              {items.icon}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
