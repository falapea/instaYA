import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Header() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header>             
         

      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "", height: '200px' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>InstaYA</h1>
              <h4 className='mb-3'>Su página para coordinar envíos</h4>
              <MDBBtn tag="a" className='mb-4  gradient-custom-4' outline size="lg">
                Inicio
              </MDBBtn>



            </div>
          </div>
        </div>
      </div>


    </header>
  );
}