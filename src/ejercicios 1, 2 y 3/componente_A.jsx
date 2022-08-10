import React from 'react';
import { Contacto } from './contacto_model';
import ComponenteB from './componente_B';

const ComponenteA = () => {

    const testContacto = new Contacto( "Renato", "Flores", "renatoflores2012@gmail.com", false );

    return (
        <div>
            <ComponenteB contacto = { testContacto }></ComponenteB>
        </div>
    );
};

export default ComponenteA;
