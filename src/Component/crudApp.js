import React, { useState } from 'react';
import CrudForm from './crudForm';
import CrudTable from './crudTable';


const Initialdb = [
    {
        id: 1,
        name: "Milton",
        age: 21,
        champion: "Chogath",
    },
    {
        id: 2,
        name: "Cristancho",
        age: 19,
        champion: "Riven",
    },
    {
        id: 3,
        name: "Richard",
        age: 19,
        champion: "Camille",
    },
    {
        id: 4,
        name: "Fabian",
        age: 19,
        champion: "Samira",
    }
];


const CrudApp = () => {

    const [db, setDb] = useState(Initialdb);
    const [confirmEdit, setConfirmEdit] = useState(null);

    const createData = (data) => {
       data.id = Date.now();
    //    console.log(data)
        setDb([...db,data])
    };

    const updateData = (data) => { 
        let newData = db.map(el=> el.id === data.id ? data :el);
        setDb(newData); 
    };

    const deleteData = (id) => { 
        let isDelete = window.confirm(` ¿ Esta seguro de eliminar los datos con el id  '${id}' ?` )

        if(isDelete){
            let goDelete = db.filter((el) =>  el.id !== id  );
            setDb(goDelete);
        }else{
            return
        }
    };

    return (
        <div>
            <h2>Crud app</h2>
            <article className="responsive-designe">
            <CrudForm 
            createData={createData} 
            updateData={updateData} 
            confirmEdit={confirmEdit} 
            setConfirmEdit={setConfirmEdit} />

            <CrudTable 
            data={db}  
            deleteData={deleteData} 
            setConfirmEdit={setConfirmEdit} />
            </article>
           
        </div>
    );
}

export default CrudApp;