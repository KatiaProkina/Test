import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../style/LoginPage.css'
import { AuthContext } from './context/auth';
import user from '../../newJsonUsers.json'

import { useState } from 'react';
const LoginPage = ()=>{
     const {isAuth,setIsAuth} = useContext(AuthContext)
     const [valueEmail,setValueEmail] = useState('')
     const [valuePassword,setValuePassword] = useState('')
    
    

    const handleLogin = ()=>{
        if(user[0].email == valueEmail || user[1].email == valueEmail && user[0].password==valuePassword || user[1].password==valuePassword){
            setIsAuth(true)
        }
       
    }
   

    if(isAuth){
        return <Navigate to= '/orders'/>
    }
    return(
        <div className='container'>
            <div className='login-container'>
            <form className="form-enter" action="">
            <input className="input" type='text' name='login' placeholder="Email" value={valueEmail} onChange={ e=> setValueEmail(e.target.value)}/>
            <input className="input" type="text" name="password" placeholder="Пароль" value={valuePassword} onChange={ e=> setValuePassword(e.target.value)}/>
            <button className='button'onClick={handleLogin} >ВОЙТИ</button>
            <Link className='login-link'>Забыли пароль</Link>
            </form>
            </div>
        </div>
    )
}
export default LoginPage;