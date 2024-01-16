import {FiHeart} from 'react-icons/fi';
import {AiOutlineUser, AiOutlineShoppingCart} from 'react-icons/ai';
import "./Navi.css"

function Navigation() {
  return (
    <>
    <nav>
        <div className="nav-container">
            <input type="text" 
            placeholder='Enter Your search shoes'
            className='Search-input' 
            />
        </div>
        <div className="profile-container">
            <a href="http">
                <FiHeart className="nav-icons"/>
            </a>
            <a href="http">
                <AiOutlineShoppingCart className="nav-icons"/>
            </a>
            <a href="http"> 
                <AiOutlineUser className="nav-icons"/>
            </a>
        </div>
    </nav>
    </>
  )
}

export default Navigation;