import React from "react";
import { useParams } from "react-router-dom";
import Records from "../../plp.json";

const ProductDetail = () => {
  const { productId } = useParams(); 

  
  const product = Records.data.find(
    (record) => record.id.toString() === productId
  );
  const [selectedVariant, setSelectedVariant] = React.useState(
    product.varaints[0]
  );

  if (!product) {
    return <div>Product not found.</div>;
  }

  const handleVariantClick = (variant) => {
    setSelectedVariant(variant);
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      <div>
        <img
          className="w-full h-auto lg:w-96 lg:h-auto p-6 pb-2"
          src={selectedVariant.images[0]}
          alt="t-shirt"
        />
        <div className="flex gap-2">
          {product.varaints.map((variant) => (
            <img
              key={variant.id}
              className=" w-14 h-auto ml-6 cursor-pointer"
              src={variant.images[0]}
              alt={`Variant ${variant.id}`}
              onClick={() => handleVariantClick(variant)}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className=" text-3xl font-bold mt-4">{product.name}</h2>
        <p className=" text-lg mt-5 text-orange-500">
          Price: {selectedVariant.price}
        </p>
        {/* <p className=" text-lg mt-6"> Size: {selectedVariant.size}</p> */}
        <div className="flex items-center py-1 px-1 mt-6 ">
          <p className="text-lg">Size :</p>
          <select className="px-6 py-2 border border-gray-300 rounded-md">
            <option value="small">S</option>
            <option value="medium">M</option>
            <option value="large">L</option>
          </select>
        </div>
        {/* <p>{selectedVariant.color}</p> */}
        <p className=" py-3">Color</p>

        <div className="flex items-center py-2">
          <input
            type="radio"
            id="option1"
            name="radio"
            className="appearance-none w-4 h-4 bg-orange-500 rounded-full"
          />
          <label htmlFor="option1" className="ml-2 text-orange-500"></label>
          <input
            type="radio"
            id="option2"
            name="radio"
            className="appearance-none w-4 h-4 bg-black rounded-full ml-1"
          />
          <label htmlFor="option2" className="ml-2 "></label>
        </div>
        <br></br>

        <p>{product.description}</p>
        <br></br>
        <br></br>
        <button className="bg-transparent hover:bg-black bg-black font-semibold hover:text-white py-2 px-4  border-black hover:border-solid border-2 text-sky-950">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
