import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Formulario = ( { crearCita }) => {
    
    // Crear State de citas
    const [ cita, actualizarCita ] = useState({
       mascota:'',
       propietario:'',
       fecha:'',
       hora:'',
       sintomas:''
    });

    const [ error, actualizarError ] = useState(false);

    // Funcion que se ejecuta cada que el usaurio escribe en un input
    const actulizarState = ( e ) => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    // Extraer los valores
    const {
        mascota,
        propietario,
        fecha,
        hora,
        sintomas
    } = cita;

    // cuando el usuario presiona agregar cita
    const submitCita = (e) => {
        e.preventDefault();
        // Validar
        if( 
            mascota.trim() === '' || 
            propietario.trim() === '' || 
            fecha.trim() === '' || 
            hora.trim() === '' || 
            sintomas.trim() === ''
        ){
            actualizarError(true);
            return;
        }
        // eliminarmo el error
        actualizarError(true)
        // asignar un ID
        cita.id = uuidv4();
        // crear cita
        crearCita( cita );
        // reiniciar form
        actualizarCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        });

    }

    return (
        <>
            <h2>Crear citas</h2>
            {/* validamos si error es true o false */}
            {
                error ?
                <p className="alerta-error">Todos los campos son obligatorios</p>
                :
                null
            }
            <form onSubmit={ submitCita }>
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="nombre mascota"
                    onChange={ actulizarState }
                    value={ mascota }
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    onChange={ actulizarState }
                    name="propietario"
                    className="u-full-width"
                    placeholder="nombre dueño de la mascota"
                    value={ propietario }
                />
                <label>Fecha</label>
                <input
                    type="date"
                    onChange={ actulizarState }
                    name="fecha"
                    className="u-full-width"
                    value={ fecha }
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={ actulizarState }
                    value={ hora }
                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={ actulizarState }
                    value={ sintomas }
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                > Agregar citas </button>
            </form>
        </>
    )
}

export default Formulario
