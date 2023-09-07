// import React from "react";
// import { Link } from "react-router-dom";
// // import Records from "../../../../public/data/plp.json";
// import Records from "../../plp.json";

// const Bestseller = () => {
//   const bestsellerProducts = Records.data.filter((product) => product.bestseller);

//   return (
//     <div className="grid grid-cols-4 gap-5">
//       {bestsellerProducts.map((product) => {
//         const variant = product.varaints[0];
//         return (
//           <Link to={`/product/${product.id}`} key={product.id}>
//             <div className="max-w-xs rounded  shadow-lg m-4 cursor-pointer">
//               <img src={variant.images[0]} alt="t-shirt" />
//               <p className=" text-stone-950 text-3xl my-2 font-bold">{product.name}</p>
//             </div>
//           </Link>
//         );
//       })}
//     </div>
//   );
// };

// export default Bestseller;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Bestseller = () => {
  const [bestsellerProducts, setBestsellerProducts] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:7000/product/getProducts/"; 

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
      
        const bestsellers = data.products.filter(
          (product) => product.bestseller
        );
        setBestsellerProducts(bestsellers);
      })
      .catch((error) => {
        console.error("Error fetching bestsellers:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5">
      {bestsellerProducts.map((record) => {
        const variant = record.varaints[0];
        return (
          <Link to={`/product/${record.id}`} key={record.id}>
            <div>
              <img src={variant.images[0]} alt="t-shirt" />
              {record.name}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Bestseller;
