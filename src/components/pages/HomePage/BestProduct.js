import React from 'react'
import './BestProduct.css'
import Producticon_01  from '../../../../src/images/-e-Producticon_01.png'
import BestImage from '../../../../src/images/-e-BestImage_01.png'
import Bes_bg from '../../../../src/images/Bes_bg.png'
import { Link } from 'react-router-dom'
const BestProduct = () => {
    const bpStyle = {
        backgroundImage: ` url(${Bes_bg})`,
        
    }
    const stProduct = {
        backgroundImage: ` url(${BestImage})`,
        backgroundRepeat: 'no-repeat',
        
          backgroundPosition: 'center'
    }
    return (
        <>
            <div className='best_product' style={bpStyle}>
                <div className='container'>
                    <div className='title_bestProduct'>
                        <h1>BEST PRODUCT</h1>
                        <div className='dcr_title'>
                            <p>I recommend using Zeppelin rather than Drobox. However, you need the personal
                                Gmail account information that you use to use Zeppelin.</p>
                        </div>
                    </div>
                    <div className='production'>
                        <ul className='dp-fl'>
                            <li>
                                <div className='img_production' style={stProduct}>
                                    <div className='list_new'>
                                        <img src={Producticon_01} />
                                        </div>
                                </div>
                                <div className='go_need dp-fl'>
                                    <div className ='p_goneed'><p>HOW TO CREAT MOBILE APP</p> </div >
                                    <div className='go'> <p><Link className='text-link'>GO</Link></p></div>
                                </div>

                            </li>
                             <li>
                                <div className='img_production' style={stProduct}>
                                    <div className='list_new'>
                                        <img src={Producticon_01} />
                                        </div>
                                </div>
                                <div className='go_need dp-fl'>
                                    <div className ='p_goneed'><p>HOW TO CREAT MOBILE APP</p> </div >
                                    <div className='go'> <p><Link className='text-link'>GO</Link></p></div>
                                </div>

                            </li>
                             <li>
                                <div className='img_production' style={stProduct}>
                                    <div className='list_new'>
                                        <img src={Producticon_01} />
                                        </div>
                                </div>
                                <div className='go_need dp-fl'>
                                    <div className ='p_goneed'><p>HOW TO CREAT MOBILE APP</p> </div >
                                    <div className='go'> <p><Link className='text-link'>GO</Link></p></div>
                                </div>

                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            
            
        </>
    )
}

export default BestProduct
