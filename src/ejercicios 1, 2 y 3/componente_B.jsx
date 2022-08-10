import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "./contacto_model";
const ComponenteB = ({ contacto }) => {


    const cambiarEstado = (id) => {
        contacto.estado = !contacto.estado;
        console.log(contacto.estado);
    }

    return (
        <div>
            <h2>{contacto.nombre}</h2>
            <h2>{contacto.apellido}</h2>
            <h2>{contacto.email}</h2>
            <h2>{contacto.estado ? "En Línea" : "No Disponible"}</h2>
            <button onClick={cambiarEstado}>Cambiar estado</button>
        </div>
    );
}
ComponenteB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto),
}

export default ComponenteB;