import React, { } from 'react'
import { useState,useEffect } from 'react';
import './Navbar.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {GiHamburgerMenu} from 'react-icons/gi'
import { GoX } from 'react-icons/go'
import Boxmenu from './Boxmenu';
function Navbar() {

    const [click, setclick] = useState(false)
    const[box,setbox]= useState(false)
    const handle = () => {
        setclick(!click)
        setbox(!box)
    }
    useEffect(() => {
        handle();
    },[])
  
  
    return (
        <nav>
            <div className='navbar'>
                <div className='container-fluid'>
                    <div className='conten-navbar dp-fl'>
                    <div className='top-logo'>
                           
                                <Link className='text-link' >what happened</Link>
                       
                        </div>
                        
                        <div className='button_menu' onClick={handle}>{click ? <GoX /> : <GiHamburgerMenu />}
                            <div className='menu_box'>{box ? <Boxmenu/> : 'MENU'}</div>
                        </div>
                        
                        <div className='top-menu '>
                            <div className='menu'>
                                <ul className='dp-fl'>
                                    <li><Link className='text-link'>INTRODUCTION</Link></li>
                                    <li><Link className='text-link'>INTRODUCTION</Link></li>
                                    <li><Link className='text-link'>INTRODUCTION</Link></li>
                                </ul>
                            </div>
                            <div className='user'>
                                <ul className='dp-fl'>
                                    <li><Link className='text-link'>LOGIN</Link></li>
                                    <li><Link className='text-link'>APPLY FOR FREE USE</Link></li>
                                    
                                </ul>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
  
        </nav>
    )
}

export default Navbar;
