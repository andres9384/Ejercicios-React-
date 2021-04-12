import React, { useState, useEffect } from 'react';

const InitialForm={
    name:"",
    age:"",
    champion:"",
    id:null
}

const CrudForm = ({createData,updateData,confirmEdit,setConfirmEdit}) => {
    const [form, setForm] = useState(InitialForm);

    useEffect(()=>{
        if(confirmEdit){
            setForm(confirmEdit);
        }else{
            setForm(InitialForm);
        }
    },[confirmEdit])

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };  

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!form.name || !form.champion || !form.age){
            alert("datos incompletos");
            return;
        }
        if(form.id === null ){  
            createData(form);
        }
        else{
            updateData(form);
        }
        handleReset();
    };
    
    const handleReset = (e)=>{
        setForm(InitialForm);
        setConfirmEdit(null);
    };
    
    return ( <div>
        <h3>
            {confirmEdit ? "Editar" : "Agregar"}
        </h3>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Nombre" onChange={handleChange} value={form.name} />
            <input  type="text" name="champion" placeholder="Campeon" onChange={handleChange} value={form.champion} />
            <input type="number" name="age" placeholder="edad" onChange={handleChange} value={form.age} />
            <input type="submit"value="Enviar" />
            <input onClick={handleReset} type="reset" value="Borrar" />
        </form>
    </div> );
}
 
export default CrudForm;