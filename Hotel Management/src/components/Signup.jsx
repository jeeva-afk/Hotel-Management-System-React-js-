import React, {useState} from 'react'
import '../Assetts/Signup.css'
import { Link, useNavigate } from 'react-router-dom';

const Signup=()=>
{
    const nav=useNavigate();
    const[password,setpassword] = useState('');
    const[cpassword,setcpassword] = useState('');

    const handlesignup=(e)=>
    {
        e.preventDefault();
        if(password === cpassword && (password!=='' || cpassword!==''))
        {
            nav('/');
        }
        else
        {
            alert("Verify ur password");
        }
        
    }

    return(
        <body className='Signupbody'>
        <form class="container2">
        <h2 className='text'>Sign Up</h2>
        <input type="phone" name="" id="name" className="name1" placeholder="   Name" required/>

        <input type="tel" name="" id="phone" className="name1"  placeholder="   Phone No" required/>


        <input type="email" name="" id="email" className="name1"  placeholder="    Email" required/>

        <input type="password" name="" id="pass1" value={password} onChange={(e) => setpassword(e.target.value)} className="name1"  placeholder="    Password" required/>
        <input type="password" name="" id="pass2" value={cpassword} onChange={(e) => setcpassword(e.target.value)} className="name1"  placeholder="    Confirm Password" required/>


        
        <Link to='/'>
        <button class="submit" onClick={handlesignup}>Sign Up</button>
        </Link>
    </form>
    </body>
    );
}
export default Signup;