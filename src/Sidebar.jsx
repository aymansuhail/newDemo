import { FiZap, FiHome, FiUser, FiUsers, FiShield, FiKey } from 'react-icons/fi'
import './Sidebar.css'
function Sidebar() {
    return (
        <aside className='sidebar'>
            <div className='logo'>
                <div className='logo-box'>
                    <FiZap size={18} />
                </div>
                <span className='logo-text'>TyroDemo</span>
            </div>

            <div className='sidebar-body'>
                <p className='menu-title'>MENU</p>
                <div className='menu-item'>
                    <FiHome size={18} />
                    <span>Dashboard</span>
                </div>
                <div className='menu-item'>
                    <FiUser size={18} />
                    <span>My Profile</span>
                </div>

                <p className='menu-title'>ADMINISTRATION</p>
                <div className='menu-item active'>
                    <FiUsers size={18} />
                    <span>Users</span>
                </div>
                <div className='menu-item'>
                    <FiShield size={18} />
                    <span>Roles</span>
                </div>
                <div className='menu-item'>
                    <FiKey size={18} />
                    <span>Privileges</span>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar