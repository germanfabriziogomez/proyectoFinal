import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className='py-5'>
      <div className="contenido mt-20 sm:w-full md:w-3/4 lg:w-1/2 p-20"> {/*Adapto el width del titulo y parrafo del header segun el tipo de pantalla*/}
          <h1>Descubre, crea y comparte tus recetas favoritas</h1>
          <p className='text-lg py-5'>En nuestra plataforma, tienes todo lo que necesitas para inspirarte y dar rienda suelta a tu creatividad culinaria. Desde recetas fáciles hasta platos gourmet, encuentra ingredientes, instrucciones detalladas y consejos de expertos para llevar tu cocina al siguiente nivel. ¡Únete y empieza a cocinar hoy mismo!</p>
      </div>
    </header>
  )
}

export default Header
