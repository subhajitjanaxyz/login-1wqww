import axios from 'axios';
import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { changestate } from '../../app/dataSlice';

export function Entrygate() {
    const dispatch=useDispatch();
    let [tokenId,settokenId]=useState('')
    const[profiledata,setProfiledata]=useState({});
    console.log(profiledata)
    console.log(tokenId)
  
const login=useSelector((state)=>state.authx);
console.log(login)
   

    const loginreq= (payload)=>{
      
            const res =  axios.post('https://api.escuelajs.co/api/v1/auth/login', payload);
      
          return res
       
    }
    const getreqToken=(token)=>{
        const res= axios.get('https://api.escuelajs.co/api/v1/auth/profile', token)
        return res
    }


const handleLogin= async(fromdata)=>{
      const datalogin= Object.fromEntries(fromdata.entries())
      console.log(datalogin)
      const payload = {
      
        "email": `${ datalogin.id}`,
        "password": `${ datalogin.password}`,
      }
      
    
    try {
      const res= await loginreq(payload)
      settokenId(res.data.access_token)
      if(res) dispatch(changestate());
    } catch (error) {
      console.log(error.message)
      
    }

try {
  const headers = {
    headers: {
        Authorization: `Bearer ${tokenId}`
    }
}

const profliedata= await getreqToken(headers);
console.log(profliedata)
setProfiledata(profliedata)
  
} catch (error) {
  console.log(  error.message)
}
      
 }



  return (<>
  <h1 className='text-center'>{tokenId?"login" :"login fast ??"}</h1>
   {login || <Form action={handleLogin} className='my-5 border w-75 mx-auto p-5 border-black bg-black text-white rounded-3'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='id' placeholder="Enter email" />
        <Form.Text className="text-muted " >
         <span className='text-white'> We'll never share your email with anyone else.</span>
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBa    sicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
   <div className="text-center">
   <button variant="primary" type="submit">
        login
      </button>
   </div>
    </Form>}
    <h1>{login?"successfully login":"log first ??"}</h1>
    </>
  );
}

