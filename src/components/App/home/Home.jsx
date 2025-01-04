import React, {useState} from 'react'
import Novedades from './novedades/Novedades'


const Home = (props) => {

    const {cambiarVista, verHistorial} = props;

    const actualizarVista = () => {
        cambiarVista("create-recipe");
    }

    const mostrarHistorial = () => {
      verHistorial();
    }
  return (
    <>
    <section className='flex flex-col items-center justify-center'>
        <div className='w-3/4 flex flex-col items-center'>
            <h2 className='p-5 text-xl'>¡Bienvenidos a nuestra Comunidad de Recetas!</h2>
            <p className='p-5'> En este espacio, la cocina se convierte en una experiencia compartida. Aquí, cualquier persona puede subir sus recetas y disfrutar de la creatividad culinaria de los demás. Desde platos tradicionales hasta innovadoras propuestas, todos tenemos algo delicioso que aportar. Únete a nuestra comunidad, descubre nuevas recetas y comparte las tuyas con el mundo. ¡Es hora de cocinar y conectar! </p>

            <div className='flex gap-5'>
              <button
              className='my-5 bg-blue-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-blue-700'
              onClick={actualizarVista}
              >Crear receta</button>

              <button 
                className='my-5 bg-blue-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-blue-700'
                onClick={mostrarHistorial}
              >Ver historial</button>
            </div>
            
        </div>
    </section>

    <Novedades />

    </>
  )
}

export default Home
