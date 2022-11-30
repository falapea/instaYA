import React from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  
}
  from 'mdb-react-ui-kit';

export const Login = () => {
  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image ' >
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Iniciar sesión</h2>
          <MDBInput wrapperClass='mb-4' label='Usuario' size='lg' id='form1' type='text' />
          
          <MDBInput wrapperClass='mb-4' label='Contraseña' size='lg' id='form3' type='password' />
          <a href="#" class="stretched-link">¿Desea crear una nueva cuenta?</a>
          
          <div className='d-flex flex-row justify-content-center mb-4'>
          </div>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Enviar</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;