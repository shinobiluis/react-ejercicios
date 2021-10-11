import React, { useState } from 'react'
import Formulario from "./components/Formulario";
function App() {
  // citas
  const [citas, gurdarCitas] = useState([]);
  // funcion que toma las citas actuales y agrega la nueva

  const crearCita = ( cita ) => {
    console.log("cita", cita)
    gurdarCitas([
      ...citas,
      cita
    ])
  }
  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="row">
        <div className="one-half column">
          <Formulario
            crearCita={ crearCita }
          />
        </div>
        <div className="one-half column">
          2
        </div>
      </div>
    </>
  );
}

export default App;
