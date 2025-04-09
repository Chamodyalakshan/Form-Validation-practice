import React from 'react'

function InputFild({name,type,change,value}) {

    const handleChange=(e)=>{

        change(e);

    }

  return (
    <>


   <p>{name} :</p>
    <
        input type={type} placeholder={name}  name ={name}
        onChange={handleChange}
        value={value}
        
     />
    </>
  )
}

export default InputFild