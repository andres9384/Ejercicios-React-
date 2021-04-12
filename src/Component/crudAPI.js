import React, { useState,useEffect } from 'react';
import { helpHttp } from '../helpers/helpHttp';
import CrudForm from './crudForm';
import CrudTable from './crudTable';
import Loader from './loader';
import Message from './message';



const CrudAPI = () => {
    const [db, setDb] = useState(null);
    const [confirmEdit, setConfirmEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    let api = helpHttp();
    let url = "http://localhost:5000/Conocidos";
    useEffect(() => {   

        setLoading(true);
        api.get(url).then(res=>{
            // console.log(res)
            if(!res.err){
                setDb(res);
                setError(null);
            }else{
                setDb(null);
                setError(res);
                console.log("errorsiciomo");
            } 
            setLoading(false);
        });
       
     }
     
     , []);
   

    const createData = (data) => {
       data.id = Date.now();
    //    console.log(data)
    let option= {
        body:data,
         headers:{"Content-type": "application/json"}
        }

    api.post(url, option).then((res) => {
        // console.log(res);
        if(!res.err){
            setDb([...db,res])
        }else{
            setError(res)
        }
    });
        
    };

    const updateData = (data) => { 

        let endpoint = `${url}/${data.id}`; 

        let option= {
            body:data,
             headers:{"Content-type": "application/json"}
            }
    
        api.put(endpoint, option).then((res) => {
            // console.log(res);
            if(!res.err){
                let newData = db.map(el=> el.id === data.id ? data :el);
                setDb(newData);
            }else{
                setError(res)
            }
        });
 
    };

    const deleteData = (id) => { 
        let isDelete = window.confirm(` ¿ Esta seguro de eliminar los datos con el id  '${id}' ?` )

        if(isDelete){
            let endpoint = `${url}/${id}`; 
            let option= {
                 headers:{"Content-type": "application/json"}
                }
        
            api.del(endpoint,option).then(res => {
                if(!res.err){
                    let goDelete = db.filter((el) =>  el.id !== id  );
                    setDb(goDelete);
                }else{
                    setError(res)
                }
            })
          
        }else{
            return
        }
    };

    return (
        <div>
            <h2>Crud API</h2>
            <article className="responsive-designe">
            <CrudForm 
            createData={createData} 
            updateData={updateData} 
            confirmEdit={confirmEdit} 
            setConfirmEdit={setConfirmEdit} />
            
            {loading && <Loader/> }
            {error && <Message contenti={`Error ${error.status} : ${error.statusTest}`} color="#dc3545"  /> }
            { db && <CrudTable 
            data={db}  
            deleteData={deleteData} 
            setConfirmEdit={setConfirmEdit} />
            }
           
            
            </article>
           
        </div>
    );
}

export default CrudAPI;