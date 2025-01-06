import './CreateUser.css'
import React,{ useState} from 'react'
import {useNavigate } from 'react-router-dom';
import axios from 'axios';


const CreateUser = () =>{
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [address, setSddress] = useState();
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        axios.post('https://backenddemomern-0wce.onrender.com/api/user/create',{name,email,address})
        .then (result=>{
            console.log(result.data);
            navigate('/');
        })
        .catch((err)=>
            {console.log(err)})
    }
    return(
        <div>
            <h1>Create User</h1>
            <form onSubmit={submit}>
                <lable>Name: </lable>
                <input type="text" onChange={(e)=>setName(e.target.value)}></input>
               <br></br><br></br>
                <lable>Email: </lable>
                <input type="text" onChange={(e)=>setEmail(e.target.value)}></input>
                <br></br><br></br>
                <lable>Address: </lable>
                <input type="text" onChange={(e)=>setSddress(e.target.value)}></input>
                <br></br><br></br>
                <button type= "submit">Submit</button>
                
            </form>
        </div>
    )
}
export default CreateUser
