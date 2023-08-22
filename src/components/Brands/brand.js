 import React from 'react';

const Brand = ({imageUrls}) => {
   return (
    <div className="text-left">
      <div className="relative lg:flex  ">
       <h1 className="text-3xl font-bold mb-4 px-12 lg:absolute">Brands</h1>
         <div className="flex overflow-x-auto p-7 m-2 gap-14 space-x-2 lg:overflow-x-hidden ">
        {
        imageUrls?.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt="Brand img"
            className="w-24 h-20 m-3"
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Brand;
