import React from 'react';
import CrudTableRow from './crudTableRow';

const CrudTable = ({data,deleteData,setConfirmEdit}) => {
    return ( <div>
        <h3>Tabla de Datos</h3>
        <table>
            <thead>
                <tr>
                    <th>Nombre </th>
                    <th>Edad</th>
                    <th>Campeon</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                {data.length > 0
                 ? 
                 (data.map((el) => <CrudTableRow key={el.id} 
                 el={el} 
                 setConfirmEdit={setConfirmEdit} 
                 deleteData={deleteData}  />))
                
                 :  (<tr>
                     <td colSpan="4" >Sin datos </td>
                   </tr>) }
            
            </tbody>
        </table>
    </div> );
}
 
export default CrudTable;