import { useLayoutEffect, useState } from "react"
import CreateRecipe from "./create-recipe/CreateRecipe"
import Home from "./home/Home"
import RecipeHistory from "./recipe-history/RecipeHistory"

function App() {

  const [historial,setHistorial] = useState([]);
  const [vistaActual,setVistaActual] = useState("home");

  let contRecetas = localStorage.length;
  const agregarReceta = (receta) => {

    // Aumento en 1 el contador de recetas
    contRecetas++;

    // Guardo la clave segun el orden de receta ("[receta1, {} ], [receta2,{}]")
    let clave= "receta"+contRecetas

    // Agrego las recetas al local storage (clave,"{objeto convertido en string}")
    localStorage.setItem(clave, JSON.stringify(receta));

  }

  const cambiarVistaActual = (vista) => {
    setVistaActual(vista);
  }

  const verHistorial = () => {
    let historial = [];
      
      for(let i=0;i<localStorage.length;i++)
      {
        let clave = localStorage.key(i);
        let receta = localStorage.getItem(clave); // obtengo la receta

        // Agrego todo lo que hay en el localStorage al historial
        historial.push(JSON.parse(receta));
      }
      setHistorial(historial);  
  
      setVistaActual("recipe-history");
  }
  
  return (
    <>
      {vistaActual==="home" && <Home cambiarVista={cambiarVistaActual} verHistorial= {verHistorial}/>}
      {vistaActual === "create-recipe" && <CreateRecipe cambiarVista={cambiarVistaActual} subirReceta={agregarReceta}/>}
      {vistaActual==="recipe-history" && <RecipeHistory history={historial} cambiarHistorial={setHistorial} cambiarVista={cambiarVistaActual}/>}
    </>
  )
}
export default App
