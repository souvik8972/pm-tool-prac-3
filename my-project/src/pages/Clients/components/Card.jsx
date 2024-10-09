import React from 'react';

const Card = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-2 -z-20">
      {data.map((item, i) => (
        <div
          key={i} // Adding a unique key for each card
          className="w-40 bg-white shadow-[-1px_7px_15px_-4px_rgba(0,_0,_0,_0.1)] flex items-center justify-center h-32 rounded-xl space-y-3 relative overflow-hidden"
        >
          <div className="w-20 h-20 bg-[#5b1919] rounded-full absolute -right-5  shadow-[-1px_7px_15px_-4px_rgba(0,_0,_0,_0.1)] -top-7 hover:scale-110 transition-transform duration-300">
            <p className="absolute bottom-4 left-7 text-white  text-2xl">{i + 1}</p>
          </div>
          <div className="w-24 h-24 bg-[#e5c09c05] border rounded-full absolute -right-5 shadow-[-1px_7px_15px_-4px_rgba(0,_0,_0,_0.1)] -top-7 hover:scale-110 transition-transform duration-300">
            
          </div>
          
          <h1 className="font-bold  text-lg ">{item.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Card;
