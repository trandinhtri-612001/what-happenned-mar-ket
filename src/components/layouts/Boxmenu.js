import React from 'react'
import { Link } from 'react-router-dom'
import'./Boxmenu.css'

const Boxmenu = () => {
    return (
        <div>
            <div className='boxmenu'>
                                <p><Link className='text-link'>I recommend using</Link></p>
                                <p><Link className='text-link'>I recommend using</Link></p>
                                <p><Link className='text-link'>I recommend using</Link></p>
                                <p><Link className='text-link'>I recommend using</Link></p>
                                <p><Link className='text-link'>I recommend using</Link></p>
                                <p><Link className='text-link'>I recommend using</Link></p>
                               
                            </div>
            
        </div>
    )
}

export default Boxmenu
