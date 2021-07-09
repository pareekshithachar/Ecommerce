import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assets/crown.svg';


const Header =({currentUser})=>(
    <div className="header">
        <Link className ='header-container'to="/">
            <Logo className='logo'/>
        </Link>
        <div className='options'>
        <Link to="/shop"className="option">SHOP</Link>
        <Link to="/shop"className="option">CONTACT</Link>
        {
            currentUser?
            <div className="option pointer" onClick={()=>auth.signOut()}>SIGN OUT</div>
            :
            <Link className="option pointer" to="/signin" >SIGN IN</Link>
        }
        </div>

    </div>
)

export default  Header