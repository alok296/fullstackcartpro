import React from 'react'
import { ErrorMessage } from 'formik'

export default function Errormsg({name,email,password,contact,address,gender,place,about}) {
return (
<div style={{color:'red'}}>
<ErrorMessage name={name}/>
{/* <ErrorMessage name={email}/>
<ErrorMessage name={password}/>
<ErrorMessage name={contact}/>
<ErrorMessage name={address}/>
<ErrorMessage name={gender}/>
<ErrorMessage name={place}/>
<ErrorMessage name={about}/> */}
</div>
  )
}
