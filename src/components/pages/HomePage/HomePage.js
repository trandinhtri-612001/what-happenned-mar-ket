import React from 'react'
import './HomePage.css'
import whp from '../../../../src/images/whp.png'
import box from '../../../../src/images/box.png'
import Bandstory from '../../../../src/images/Bandstory.png'
import newbg from '../../../../src/images/news.png'
import vdo from '../../../../src/images/Video.png'
import {FaLongArrowAltRight} from "react-icons/fa";
import { Link } from 'react-router-dom';

import BestProduct from './BestProduct';
import Production from './Production';

const HomePage = () => {
    const style = {
        backgroundImage: ` url(${box})`,
        padding: '100px 0',
        color:'#f0f0f0'
    }
    return (
        <>
            <div className='main_banner'>

                <div className='container-sm'>
                    <div className='content_banner'>
                            <div className='title_mainbanner'>
                        <h1>
                            LAUNCHING OPEN EVENT!
                        </h1>
                        </div>
                        <div className='whmk_title'>
                            <img src={whp} alt='title'/>
                        </div>
                        <div className='btn_banner dp-fl'>
                            <div className='btn_bnr'>
                               <p><Link className='text-link'>lorem ippsum</Link></p>
                            </div>
                            <div className='next'>
                                <FaLongArrowAltRight/>

                            </div>
                            <div className='btn_bn '>
                                lorem 
                                input
                            </div>
                            <div className='next'>
                                <FaLongArrowAltRight/>

                            </div>
                            <div className='btn_bnr'>
                                <p><Link className='text-link'>lorem ippsum</Link></p>
                            </div>


                        </div>
                    </div>
       
                </div>
            </div>
            
            <div className=' box_banner_content' style={style}>
                <div className='container'>
                    <div className='title_box_baner'>
                        <h1>WHAT HAPPENED !</h1>

                    </div>
                    <div className='dsc_box_banner'>
                        <p>I recommend using Zeppelin rather than Drobox. However,
                            you need the personal Gmail account information that you use to use Zeppelin.
                            I'm going to invite you by email, so please forward your personal email to the manager.</p>
                    </div>
                </div>

            </div>
            <BestProduct />
            <Production />
            

            <div className='wp_BandStory' style={{backgroundImage:`url(${Bandstory})`}}>
                <div className='container'>
                    <div className='title_bandstr'>
                        <h1>BAND STORY</h1>
                        <p>I recommend using Zeppelin rather than Drobox. However,
        you need the personal Gmail account information that you use to use Zeppelin.</p>
                    </div>
                    <div className='content_story'>
                        <h3>WHAT HAPPENED'S BAND STORY</h3>
                        <p>I recommend using Zeppelin rather than Drobox. However,
                            you need the personal Gmail account information that you use to use Zeppelin.</p>
                         <div className='btn_bandstr'>
                        <div className='btn_item'><Link className='text-link'>see more</Link></div>
                    </div>
                    </div>

                </div>
            </div>


            <div className='happened_issue' style={{backgroundImage:`url(${newbg})`}}>
                <div className='container'>
                    <div>
                        <h1>HAPPENED'S ISSUE</h1>
                        <p>I recommend using Zeppelin rather than Drobox. However,
                            you need the personal Gmail account information that you use to use Zeppelin</p>
                    <div className='btn_bandstr'>
                        <div className='btn_item'><Link className='text-link'>see more</Link></div>
                    </div>
                    </div>
                </div>
            </div>


             <div className='happened_vdo happened_issue' style={{backgroundImage:`url(${vdo})`}}>
                <div className='container'>
                    <div>
                        <h1>HAPPENED'S ISSUE</h1>
                        <p>I recommend using Zeppelin rather than Drobox. However,
                            you need the personal Gmail account information that you use to use Zeppelin</p>
                    <div className='btn_bandstr'>
                        <div className='btn_item'><Link className='text-link'>see more</Link></div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
