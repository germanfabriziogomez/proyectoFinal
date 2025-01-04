import React from 'react'
// importo las imagenes
import Tacos from '../../../../assets/tacos.jpg'
import Paella from '../../../../assets/paella.jpg'
import Ensalada from '../../../../assets/ensalada.jpg'

import './Novedades.css'
const Novedades = () => {
  return (
    <section className='w-[90%] flex items-center justify-center flex-col p-5 m-auto'>
  <h2 className='p-5 text-xl'>Novedades</h2>

  <div className='grid grid-cols-3 gap-3 bg-gray-100 p-5 container'>
    <div className='bg-gray-200 flex flex-col items-center p-5 card min-h-full'>
      <img src={Tacos} alt="Imagen de un plato de tacos" className='w-[300px] h-[240px]' />
      <div className='mt-auto flex flex-col flex-1'>
        <h3 className='my-5 font-semibold'>Tacos</h3>
        <p>Tacos rellenos de cerdo marinado con achiote, piña y cebolla, acompañados de salsa roja o verde.</p>
      </div>
    </div>
    <div className='bg-gray-200 flex flex-col items-center p-5 card min-h-full'>
      <img src={Ensalada} alt="" className='w-[300px] h-[240px]' />
      <div className='mt-auto flex flex-col flex-1'>
        <h3 className='my-5 font-semibold'>Paella Valenciana</h3>
        <p className="break-words">Arroz con mariscos, pollo, conejo y verduras, cocido a fuego lento con azafrán.</p>
      </div>
    </div>
    <div className='bg-gray-200 flex flex-col items-center p-5 card min-h-full'>
      <img src={Paella} alt="" className='w-[300px] h-[240px]' />
      <div className='mt-auto flex flex-col flex-1'>
        <h3 className='my-5 font-semibold'>Ensalada Caprese</h3>
        <p>Tomate, mozzarella fresca, albahaca, aceite de oliva y balsámico. </p>
      </div>
    </div>
  </div>
</section>
  )
}

export default Novedades
