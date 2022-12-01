import { MDBContainer } from 'mdb-react-ui-kit';
import Table from 'react-bootstrap/Table';

function Gestion() {
    return (
        <MDBContainer fluid className='Gestion d-flex align-items-center justify-content-center'>
            <Table striped="columns">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Fecha</th>
                        <th>Ciudad de entrega</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                    </tr>
                    <tr>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                        <td>#</td>
                    </tr>
                    <tr>
                        <td>#</td>
                        <td>#</td> 
                        <td>#</td>
                    </tr>
                </tbody>
            </Table>
        </MDBContainer>
    );
}

export default Gestion;