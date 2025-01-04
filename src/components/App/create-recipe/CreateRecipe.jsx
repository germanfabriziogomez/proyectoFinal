import React, {useEffect, useState} from 'react'
const CreateRecipe = (props) => {

  const {cambiarVista, subirReceta} = props;
  
  const [valorNutricional,setValorNutricional] = useState(0);
  const [listaIngredientes,setListaIngredientes] = useState([]);
  const [tituloReceta,setTituloReceta] = useState('')

  const actualizarVista = () => {
    cambiarVista("home");
  }

  // Estructura de cada receta
  const [receta,setReceta] = useState({
    titulo:'',
    ingredientes:[],
    valorNutricional:0
  })

  // Estructura de cada ingrediente
  const [ingrediente,setIngrediente] = useState({
    nombre:'',
    proteinas:0
  });

  
  // Actualizo inputs del nombre del ingrediente y de proteina
  const actualizarIngrediente = (e) => {
    const {name,value} = e.target;
    setIngrediente({
      ...ingrediente,
      [name]:value
    })
  }

  // Acumulo el valor nutricional cada vez que se agreguen ingredientes a la lista
  useEffect(()=> {
    setValorNutricional(() => {
      return valorNutricional + Number(ingrediente.proteinas)
    })

    //Limpio los inputs
    setIngrediente({
      nombre:'',
      proteinas:''
    })
  },[listaIngredientes])

  // Agrego el ingrediente a esa receta
  const agregarIngredienteALaReceta = () => {
    setListaIngredientes(() => {
      return [...listaIngredientes,ingrediente]
    })  
  }

  // Subo la receta solamente cuando se haya seteado el ultimo estado
  useEffect(() => {
    if (receta.titulo && receta.ingredientes.length > 0) {
      subirReceta(receta);
    }
    setValorNutricional(0);
  }, [receta]);

  // Subo la receta al historial 
  const guardarReceta = (e) => {
    e.preventDefault(); // Evito que se recargue la pagina
    
    setReceta(()=> {
      return {
        titulo: tituloReceta,
        ingredientes: [...listaIngredientes,ingrediente],                   // Agrego el ultimo ingrediente que escribio en el input
        valorNutricional: valorNutricional + Number(ingrediente.proteinas)   
      }
    }) 

    // Limpio los campos de entrada
    setTituloReceta('');
    setListaIngredientes([]);
    alert('Tu receta fue subida correctamente')
  }

  return (

    <div className='flex flex-col items-center justify-center'>
      
      <form action="" 
          className='rounded-[35px] relative my-5 outline outline-1 outline-gray-300 p-10 flex flex-col items-center justify-center sm:w-3/4 md:w-3/4 lg:w-[40%]'
          onSubmit={guardarReceta}
      >
        <button 
          className='absolute top-2 left-2 text-black px-4 py-2 '
          type='button'
          onClick={actualizarVista}
          ><i className="fa-solid fa-arrow-left mr-2"></i>Volver</button>

        <div className='flex items-center flex-col  p-10 w-full'>

          <label htmlFor="" className='mt-10 mb-5'>Nombre de la receta: </label>
          <input 
            required
            type="text" 
            placeholder='Ingresa el nombre de la receta'
            className='rounded-[20px] outline outline-1 -outline-offset-1 outline-gray-300 py-3 px-3 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600 w-full rounded'
            name='titulo'
            value={tituloReceta}
            onChange={(e) => {setTituloReceta(e.target.value)}}
          />

          <label htmlFor="" className='mt-10 mb-5'>Ingrediente</label>
          <input 
            type='text'
            required
            name='nombre' 
            placeholder='Ingresa tu ingrediente'
            className='rounded-[20px] outline outline-1 -outline-offset-1 outline-gray-300 py-3 px-3 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600 w-full rounded'
            value={ingrediente.nombre}
            onChange={actualizarIngrediente}
          ></input>

          <label htmlFor="" className='mt-10 mb-5'>Proteinas:</label>
          <input 
            type='number'
            required
            name='proteinas' 
            placeholder='Ingresa tu ingrediente'
            className='rounded-[20px] outline outline-1 -outline-offset-1 outline-gray-300 py-3 px-3 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600 w-full rounded'
            value={ingrediente.proteinas}
            onChange={actualizarIngrediente}
          ></input>

          <div className='flex gap-5'>
            <button 
              className='rounded-[15px] my-5 bg-green-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-green-700'>
            Guardar receta</button>

            <button
              className='rounded-[15px] my-5 bg-green-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-green-700'
              type='button'
              onClick={agregarIngredienteALaReceta}
            >Agregar otro ingrediente</button>
          </div>
          <p>Valor nutriconal total de esta receta: {valorNutricional}</p>
        </div>
      </form>
      
    </div>
    
    
  )
}

export default CreateRecipe
