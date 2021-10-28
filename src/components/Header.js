import React from 'react'


const Header =props => (


    <header className='top'>
        <div className='wrap'>
            <div className='header-content'>
                <div className='header-raiting'>
                    <div className='header-rating_tag'> Рейтинг: </div>
                    <div className='header-rating_icon'>✡✡✡✡✡</div>
                </div>
                <div className='header-divider'>  </div>
                <div className='font-effect-fire-animation'>{props.title}</div>
                <h3>
                    <span>
                        Быстрая достака гоячих
                        <span className='sub-header'>#бургеров</span>
                    </span>
                </h3>
            </div>
        </div>
    </header>
);

// class Header extends React.Component {

//     render() 
//         return (
//             <header className='top'>
//                 <div className='wrap'>
//                     <div className='header-content'>
//                         <div className='header-raiting'>
//                             <div className='header-rating_tag'> Рейтинг: </div>
//                             <div className='header-rating_icon'>✡✡✡✡✡</div>
//                         </div>
//                         <div className='header-divider'>  </div>
//                         <div className='font-effect-fire-animation'>{this.props.title}</div>
//                         <h3>
//                             <span>
//                                 Быстрая достака гоячих
//                                 <span className='sub-header'>#бургеров</span>
//                             </span>
//                         </h3>
//                     </div>
//                 </div>
//             </header>
//         ); 
//     }
// }

export default Header;