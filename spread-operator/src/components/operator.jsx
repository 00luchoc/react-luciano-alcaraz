import { useState } from "react";


export function Operator() {
 const [nums, setNums] = useState([1, 2, 3, 4, 5]);
 const [persona, setPersona] = useState({
   name: "Federico",
   alumno: "Thiago",
 });
 const productos = [
    { nombre: "Camiseta", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
  ];

 //arrow function
 const addNums = () => {
   const next = nums[nums.length - 1] + 1;
   setNums([...nums, next]);
 };


 const updateName = () => {
   setPersona({ ...persona, name: "Miguel", edad: 80 });
   console.log(persona);
 };

 const productosConDescuento = productos.map((producto) => ({
   ...producto, descuento: true,
 }));

  return (
   <>
     {nums.map((num, index) => (
       <p key={index}>{num}</p>
     ))}
     <h3>Spread Operator</h3>
     <button onClick={addNums}>agregar numeros</button>
     <button onClick={updateName}>modificar persona</button>
     <h3>Productos con descuento</h3>
     {productosConDescuento.map((producto, index) => (
       <p key={index}>
         {producto.nombre} - ${producto.precio} - Descuento: {producto.descuento ? "Sí" : "No"}
       </p>
      ))}
   </>
 );
}

