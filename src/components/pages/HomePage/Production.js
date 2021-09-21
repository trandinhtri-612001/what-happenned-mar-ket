import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillHeartFill } from 'react-icons/bs'
import './Production.css';
import img_04 from '../../../../src/images/-e-img_04.png'
import img_05 from '../../../images/-e-img_06.png'
import img_06 from '../../../images/-e-img_07.png'
import img_07 from '../../../images/-e-img_08.png'
import img_08 from '../../../images/-e-img_04.png'

const Production = () => {
    const datas = [
        {
            img: img_04,
            title: '[what make happened] hơ to creat',
            price: 2300,
            heart:200
            
        },
       {
            img: img_06,
            title: '[what make happened] hơ to creat',
            price: 2300,
            heart:200
            
        },
        {
            img: img_07,
            title: '[what make happened] hơ to creat',
            price: 2300,
            heart:200
            
        },
        {
            img: img_08,
            title: '[what make happened] hơ to creat',
            price: 2300,
            heart:200
            
        },
        {
            img: img_04,
            title: '[what make happened] hơ to creat',
            price: 2300,
            heart:200
            
        },
                {
            img: img_06,
            title: '[what make happened] hơ to creat',
            price: 2300,
            heart:200
            
        }
                ,
                {
            img: img_06,
            title: '[what make happened] hơ to creat',
            price: 2300,
            heart:200
            
        }
                ,
                {
            img: img_06,
            title: '[what make happened] hơ to creat',
            price: 2300,
            heart:200
            
        }
        ,
                {
            img: img_06,
            title: '[what make happened] hơ to creat',
            price: 2300,
            heart:200
            
        }
                ,
                {
            img: img_06,
            title: '[what make happened] hơ to creat',
            price: 2300,
            heart:200
            
        },
                {
            img: img_06,
            title: '[what make happened] hơ to creat',
            price: 2300,
            heart:200
            
        },
                {
            img: img_06,
            title: '[what make happened] hơ to creat',
            price: 2300,
            heart:200
            
        }
    ]
   
    const style = {
        backgroundImage:`url(${img_04})`
    }
    return (
        <>
            <div className='wp-product'>
                <div className='container'>
                    <div className='item_products'>
                
                        <ul className='productions '>
                       
                            {datas.map(data => ( <li className='item' key={data.id}><Link className='text-link'>
                                     <div className='img_production' >
                                         <img src ={data.img}/>
                                </div>
                                     <div className='title_production'>{ data.title}</div>
                                <div className='price_production dp-fl'>
                                         <div className='price'>{ `${data.price} won`}</div>
                                    <div className='follower dp-fl'>
                                        <div className='heart'><BsFillHeartFill /></div>
                                             <div className='d_heart'>{ data.heart}</div>

                                    </div>
                                </div>
                            </Link></li>)
                                
                            )}
                           
                        </ul>
                    </div>
                    <div className='btn_production'>
                        <div className='btn_item'><Link className='text-link'>see more</Link></div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Production;
