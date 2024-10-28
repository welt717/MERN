
import   React, { useState }   from  'react'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

function Form()
{
    const [name  ,  setName]  =  useState()
    const  [  email   , setEmail]  =   useState()
    const   [nameError , setNameError]  =  useState(false)
    const  [ emailError  , setEmailError]  = useState(false)

    const submitHandler = (e) =>{
         e.preventDefault()
         setEmailError(false)
         setNameError(false)
        if (name == "") {
            setNameError(true)
            console.log(
                {
                    message:  "  Please   pass  your   name "
                }
            ) 
        }  
          if  ( email  ==  '' )  {
            setEmailError(true)
            console.log(
                {
                    message:  "please   eneter   your    email"
                }
            )
        }   else   {
              console.log({
                message:  "   Login   sucessfuly  "
              })
        }
        if (name &&  email)
        {
            console.log({
                message:  ` Form  submitted   sucessfully    ${name} is   ${email}`
            })
        }  else   {

            console.log("   fill    alll   Your   details   in   please ")
        }
    }
    return(
        < Container> 

            {/*     form   fields     import   from   text   fields   */}

            <form  noValidate autoComplete="off" onSubmit={submitHandler}> 
           <TextField
          onChange={(event)=>{
           setName(event.target.value)
           console.log(name)
           }} 
   
           label="Name" variant="outlined"  color='secondary'   fullWidth required  error={nameError} gutterBottom="10"></TextField>
           <TextField  
           onChange={(event)=>{
            setEmail(event.target.value)
            console.log(email)
           }}  label="Email"   variant='outlined'   color='primary'    required   error={emailError}  fullWidth></TextField>

           {/*     multiline  input    occupy   3  lines  of  tetx  */}
           <TextField   
           onChange={(event)=>{
            console.log(event.target.value)
           }} label="Email"   variant='outlined'   color='primary'    required   error={false}  multiline   rows="4" fullWidth></TextField>
            

            <Button  type='submit'  variant="contained">Contained</Button>
            
            </form>
           
       </ Container>
    )
}

export   default  Form