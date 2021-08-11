import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo2.jpg';
import './header.css';

/**
 * Header component dump
 */
export const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink exact to="/">
                            <img src={logo} alt="Logo Wealth Health HRnet" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/">
                            HRnet
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/">
                            Create Employee
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/employee-list">
                            Employee List
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
