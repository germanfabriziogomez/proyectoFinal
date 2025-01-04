import React from 'react'
import './RecipeHistory.css'

const RecipeHistory = (props) => {
  const {history,cambiarHistorial, cambiarVista} = props;

  const eliminarReceta = (indice) => {
    let nuevasRecetas = [...history];
    
    // Elimino el elemento en ese indice
    nuevasRecetas.splice(indice,1);

    // Actualizo el historial
    cambiarHistorial(nuevasRecetas);

    // Borro ese elemento del localStorage
    let key= localStorage.key(indice);
    localStorage.removeItem(key);
  
  }

  const borrarTodoElHistorial = () => {

    let historialVacio = [];
    cambiarHistorial(historialVacio);
    localStorage.clear();
  }

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <button
        className='my-5 bg-blue-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-blue-700'
        onClick={() => {cambiarVista("home")}}
      >Volver a inicio</button>

      {/* Solo renderizo el boton "Eliminar todo el historial" si es que existe algun historial */}
      {localStorage.length > 0 && (
        
        
        <button
        className='my-5 bg-red-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-red-700'
        onClick={borrarTodoElHistorial}
        type='button'
      ><i className="fa-solid fa-trash mx-2"></i>Eliminar todo el historial</button>
      )}
      
      
      <h2 className="p-5 text-xl "><strong>Historial de recetas</strong></h2>

      {/* Si no hay historial de recetas */}
      {localStorage.length ===0 ? 
        <p>No hay recetas para mostrar </p> 
        
      // Sino
        :
        (
          <ol className='border-[5px] border-black p-5 lg:w-3/2 '>
            {history.map((receta,index) => (
              <li key={index} className='flex justify-between items-center bg-gray-100 mb-5 md:flex-row p-5'>
                <div className='w-full p-5 mb-5'>
                  <h3 className='break-words mb-5'><strong>Titulo de la receta:</strong><br />

                    {/* Pongo la primera letra en mayuscula */}
                    {receta.titulo.charAt(0).toUpperCase()+receta.titulo.slice(1)}
                  </h3>

                  <p className='break-words'><strong>Ingredientes:</strong></p><br />
                  {
                    receta.ingredientes.map((ingrediente) => (
                    <>
                      <p className='break-words'>
                        {/* Pongo la primera letra en mayuscula */}
                        -{ingrediente.nombre.charAt(0).toUpperCase() + ingrediente.nombre.slice(1)}, {ingrediente.proteinas} proteina(s)
                      </p>
                    </>
                    ))
                  
                  }
                  <p className='break-words'>Valor nutricional: {receta.valorNutricional}</p>
                </div>
                <button
                  className='btnEliminarReceta bg-white border-2 border-red-500 text-red-500 p-2 rounded transition duration-300 ease-in-out hover:bg-red-700 hover:text-white sm:mt-5'
                  onClick={() => {eliminarReceta(index)}}
                ><i className="fa-solid fa-trash mx-2"></i>Eliminar receta</button>
              </li>
            ))}
          </ol>
        )
      }
    </div>
  )
}

export default RecipeHistory
