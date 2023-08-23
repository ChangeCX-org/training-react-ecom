import React from "react";

import { useNavigate } from "react-router-dom";
const data = [
  {
    title: "Bestseller",
    img:
      "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Shop Men",
    img:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Shop Women",
    img:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHdvbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
  },
  {
    title: "Shop Casual",
    img:
      "https://images.unsplash.com/photo-1543132220-c6440149c632?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGNhc3VhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
  },
];
const CurratedBlock = () => {
  const navigate = useNavigate();
  // currated block
  const handleNavigate = (title) => {
    switch (title) {
      case "Bestseller":
        navigate("/Bestseller");
        break;
      case "Shop Men":
        navigate("/Men");
        break;
      case "Shop Women":
        navigate("/Women");
        break;
      case "Shop Casual":
        navigate("/Casual");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <p className=" text-4xl mt-10 font-extrabold">Currated Picks</p>
      <div className=" grid grid-cols-1 gap-4 lg:grid-cols-4 mt-7 ">
        {data?.map((val, idx) => {
          return (
            <div
              className="relative"
              key={idx}
              onClick={() => handleNavigate(val.title)}
            >
              <img
                src={val?.img}
                alt="image 1"
                className=" lg:h-64 lg:w-72 h-72 w-96 rounded-xl"
              />
              <div className="absolute bottom-6 lg:left-14 left-20">
                <h1 className="text-xl text-center font-bold bg-white text-black w-44 px-6">
                  {val?.title}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CurratedBlock;
