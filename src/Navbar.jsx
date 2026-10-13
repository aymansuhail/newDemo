import { FiMoon, FiChevronDown } from 'react-icons/fi'
import './Navbar.css'
function Navbar() {
    return (
        <header className='navbar'>
            <div className='breadcrumb'>
                <span className='grey'>Dashboard</span>
                <span className='breadcrumb-sep'>/</span>
                <span className='breadcrumb-current'>Users</span>
            </div>

            <div className='navbar-right'>
                <button className='theme-button'>
                    <FiMoon size={20} />
                </button>

                <div className='profile'>
                    <div className='avatar'>T</div>
                    <div className='profile-text'>
                        <div className='profile-name'>Tyro Admin</div>
                        <div className='profile-role'>Administrator</div>
                    </div>
                    <FiChevronDown className='chevron' size={18} />
                </div>
            </div>
        </header>
    )
}

export default Navbar