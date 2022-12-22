import './header.scss'
import {useState} from "react";

export default function Header() {

    const headerNav = ['Заходи', 'Товари', 'Клієнти'];
    const [category, setCategory] = useState(0);
    const onChangeCategory = (id) => {
        setCategory(id)
    }
    return (
        <div className='headerBlock'>
            <div className='headerBlock-burger'>
                <span></span>
            </div>
            <nav className='headerBlock-burgerMenu'>
                <ul className='headerBlock-burgerMenu-list'>
                    {
                        // headerNav.map((nav, i) =>
                        //     <li key={i}>
                        //         {nav}
                        //     </li>
                        // )
                    }
                </ul>
            </nav>
            <div className='headerBlock-logo'></div>
            <div className='headerBlock-blockNav'>
                <ul className='headerBlock-blockNav-navigation'>
                    {
                        headerNav.map((nav, i) =>
                            <li
                                key={i}
                                onClick={() => onChangeCategory(i)}
                                className={category === i ? 'active' : ''}>
                                {nav}
                            </li>)
                    }
                </ul>
            </div>

            <div className='headerBlock-personInfo'>
                <div className='headerBlock-personInfo-img'></div>
                <p>admin@okguru.com</p>
                <div className='headerBlock-personInfo-icon'></div>
            </div>


        </div>
    );
}
