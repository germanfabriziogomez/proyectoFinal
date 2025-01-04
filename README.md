# 🍽️ Proyecto Final - Recetas Nutricionales 🥗

## Descripción

Este proyecto es una aplicación web para gestionar recetas de cocina con un enfoque en los valores nutricionales. Los usuarios pueden **crear recetas**, agregar **ingredientes** y calcular el valor nutricional total. Las recetas se guardan en el historial, y los usuarios pueden **ver** todas las recetas guardadas en cualquier momento. La aplicación utiliza `localStorage` para persistir las recetas y sus respectivos valores nutricionales.

### Funcionalidades 🚀

1. **Pantalla principal**:
   - Dos botones:
     - **Crear Receta** 🍳: Permite crear una nueva receta.
     - **Ver Historial** 📜: Muestra el historial de recetas guardadas.

2. **Crear Receta**:
   - Formulario que permite al usuario ingresar:
     - El **nombre de la receta** 🍴.
     - El **nombre de un ingrediente** 🥒 y su **cantidad de proteínas** 💪.
   - Opción de **agregar más ingredientes** 🧑‍🍳 a la receta.
   - Cálculo automático del **valor nutricional** 💥 total de la receta, acumulando las proteínas de cada ingrediente.
   - Un botón para **guardar la receta** 💾, que la almacena en el `localStorage` y la muestra en el historial.

3. **Historial de Recetas**:
   - Muestra todas las recetas guardadas 🥘.
   - Si no hay recetas, se muestra un mensaje que indica que no hay recetas guardadas 🚫.
   - Opción para **eliminar una receta individual** 🗑️ o **borrar todo el historial** 🧹.

---

## Tecnologías Usadas ⚙️

- **React**: Biblioteca para construir la interfaz de usuario 🖥️.
- **useState y useEffect**: Para el manejo del estado y efectos secundarios (como la acumulación del valor nutricional, y el renderizado de cada seccion) 🧠.
- **localStorage**: Para almacenar las recetas y mantenerlas persistentes entre sesiones 📦.
- **CSS (Tailwind CSS)**: Para el estilo de la aplicación, aprovechando su diseño responsivo para distintas pantallas 🎨.

## Estructura del Proyecto

src/
├── components/
│   ├── App/
│      ├── home/
│      ├── recipe-history/
│      ├── create-recipe/
│      ├── App.jsx
│
├── assets/
│       ├── hero.jpg
├── index.css
├── main.jsx



