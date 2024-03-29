// import React from "react";

// export const Tile = (props) => {
  
//   const object = props.info;
//   const values = Object.values(object)

//   // console.log(values);

//   const info = values.map((value, index) => {
//     let className;
//     if (index === 0) {
//       className='tile-title';
//     } else {
//       className='tile'
//     }
//     return <p key={index} className={className} >{value}</p>
    
//   });
//   // console.log(info);
  

//   return (
//     <div className="tile-container">
//       {info}
//     </div>
//   );
// };

import React from "react";

export const Tile = ({ tile }) => {
  return (
    <div className="tile-container">
      {Object.values(tile).map((value, index) => (
        <p key={index} className={`${index === 0 ? "tile-title" : ""} tile`}>
          {value}
        </p>
      ))}
    </div>
  );
};

