import React from 'react'
import { Container } from 'react-bootstrap'

export const Modulo = () => {
  return (
    <div>
         <form>
            <div>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" placeholder='Ingrese su nombre y apellido' />
            </div>
            <div>
                <label htmlFor="">Correo electrónico</label>
                <input type="email" id="email" name="email" placeholder='correo@correo.com' />
            </div> 
            <div>
                <label htmlFor="contraseña">Contraseña</label>
                <input type="text" id="contraseña" name="contraseña" placeholder='ingrese su contraseña' />
            </div>

        </form>
    </div>
  )
}
