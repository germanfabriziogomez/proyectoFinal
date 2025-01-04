import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center bg-black text-gray-500 text-sm p-2'>
        <div className='flex flex-col justify-center sm:flex-row bg-black p-10 gap-[100px]'>
            <div>
                <h3 className="mt-1 text-gray-500 text-sm mb-7">Explorar</h3>
                <ul className='flex flex-col gap-3'>
                    <li><a href="#"className="mt-1 text-sm text-gray-500">Inicio</a></li>
                    <li><a href=""className="mt-1 text-sm text-gray-500">Quienes somos</a></li>
                    <li><a href=""className="mt-1 text-sm text-gray-500">Carreras</a></li>
                </ul>
            </div>
            <div>
                <h3 className="mt-1 text-gray-500 text-sm mb-7">Contacto</h3>
                <ul className='flex flex-col gap-3'>
                    <li className="mt-1 text-sm text-gray-500">4863-8624</li>
                    <li className="mt-1 text-sm text-gray-500">Av. Rivadavia 4000</li>
                    <li className="mt-1 text-sm text-gray-500">Caballito, Capital Federal, Argentina</li>
                </ul>
            </div>
            <div>
                <h3 className="mt-1 text-gray-500 text-sm mb-7">Seguinos</h3>
                <ul className='flex flex-col gap-3'>
                    <li><a href=""className="mt-1 text-sm text-gray-500">Instagram</a></li>
                    <li><a href=""className="mt-1 text-sm text-gray-500">Twitter</a></li>
                    <li><a href=""className="mt-1 text-sm text-gray-500">Linkedin</a></li>
                </ul>
                
            </div>
            <div>
                <h3 className="mt-1 text-gray-500 text-sm mb-7">Legal</h3>
                <ul className='flex flex-col gap-3'>
                    <li><a href=""className="mt-1 text-sm text-gray-500">Terminos y condiciones</a></li>
                    <li><a href=""className="mt-1 text-sm text-gray-500">Privacidad</a></li>
                </ul>
            </div>
        </div>
        <p>&copy;Todos los derechos reservados</p>

    </footer>
  )
}

export default Footer
