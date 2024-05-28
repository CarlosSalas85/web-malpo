'use client';
import React,{ useState, useEffect }from 'react';




const Button = (props) => {
  return (
    <button className="fondo-malpo-rojo text-l my-2 w-[270px] rounded py-5 text-white hover:text-gray-400">
      {props.titulo}
    </button>
  );
};

export default Button;
