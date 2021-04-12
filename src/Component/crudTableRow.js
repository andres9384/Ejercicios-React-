import React from 'react';

const CrudTableRow = ({el, setConfirmEdit, deleteData}) => {
    let{name,champion,age,id}=el;
    return ( 
        
        <tr>
            {/* <td>{el.name}</td> */}
           <td>{name}</td>
           <td>{age}</td>
           <td>{champion}</td>
           <td>
               <button onClick={()=>setConfirmEdit(el)} >Editar</button>
               <button onClick={()=>deleteData(id)} >Eliminar</button>
           </td>

       </tr>

     );
}
 
export default CrudTableRow;