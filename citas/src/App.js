import React, { useState, useEffect } from 'react'
import Cita from './components/Cita';
import Formulario from "./components/Formulario";
function App() {
  // citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }
  // citas
  const [citas, gurdarCitas] = useState(citasIniciales);
  // use effect para realizar ciertas operaciones cuando el state cambia
  useEffect( () => {
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas));
    }else{
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas, citasIniciales])
  // funcion que toma las citas actuales y agrega la nueva
  const crearCita = ( cita ) => {
    console.log("cita", cita)
    gurdarCitas([
      ...citas,
      cita
    ])
  }

  // funcion para eliminar una cita por el id
  const eliminarCita = ( id ) => {
    console.log("eliminar cita", id)
    const nuevasCitas = citas.filter( cita => cita.id !== id );
    gurdarCitas( nuevasCitas )
  }

  // Mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

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
          <h2>{ titulo }</h2>
          { citas.map( cita => (
            <Cita 
              key={cita.id}
              cita={ cita }
              eliminarCita={ eliminarCita }
            />
          )) }
        </div>
      </div>
    </>
  );
}

export default App;
