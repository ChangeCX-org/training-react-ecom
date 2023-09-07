// import React from "react";
// import { Link } from "react-router-dom";
// import Records from "../../plp.json";

// const DescribtionMen = () => {
//   const MenProducts = Records.data.filter((product) => product.men);

//   return (
//     <div className="grid grid-cols-4 gap-5">
//       {MenProducts.map((product) => {
//         const variant = product.varaints[0];
//         return (
//           <Link to={`/product/${product.id}`} key={product.id}>
//             <div>
//               <img src={variant.images[0]} alt="t-shirt" />
//               <p className=" font-bold text-3xl">{product.name}</p>
//             </div>
//           </Link>
//         );
//       })}
//     </div>
//   );
// };

// export default DescribtionMen;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const DescribtionMen = () => {
  const [menproducts, SetMenproducts] = useState([]);

 useEffect(() => {
    const apiUrl = "http://localhost:7000/product/getProducts/"; 

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Filter the bestseller products
        const casual = data.products.filter(
          (product) => product.men
        );
        SetMenproducts(casual);
      })
      .catch((error) => {
        console.error("Error fetching bestsellers:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5">
      {menproducts.map((record) => {
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

export default DescribtionMen;
