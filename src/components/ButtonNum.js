import React from "react";

function ButtonNum({ num, passLength, onClick }) {
  return (
    //prettier-ignore
    <button className="number" onClick={() => { 
        onClick((passLength = num)); }} >
            {num}
    </button>
  );
}

export default ButtonNum;
