import React, { useState } from 'react'
import InputFild from './InputFild'

function Form() {

    const [formData,setFormData]=useState({
        "email":"",
        "password":""
    });

    const [formError,setFormError]=useState({});

    const handleChange=(e)=>{
        setFormData((prev)=>({
            ...prev,
            [e.target.name]:e.target.value,
            
            
        }))
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        
        const fildes=[
            {name:"email", value:formData.email, require:true},
            {name:"password", value:formData.password, require:true}
        ];

        const errors={};

        fildes.forEach(item=>{
            if(item.require && !item.value.trim()){
                errors[item.name]=`${item.name} is requred.`
            };
        });

        setFormError(errors);

        if(Object.keys(errors).length===0){
            alert("Form is submited.!")
            

        };

        formData.email=""
        formData.password=""

        
    }


  return (
    <>
    <form onSubmit={handleSubmit}>
        <InputFild name="email" type="text" value={formData.email} change={handleChange}/><br />
        <p>{formError.email}</p>
        <InputFild name="password" type="password" value={formData.password} change={handleChange}/><br />
        <p>{formError.password}</p>
        <br />
        <button type='submit'>Submit</button>
    </form>
    </>
    
  )
}

export default Form