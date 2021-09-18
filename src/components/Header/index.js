import { NavLink } from 'react-router-dom';
import { cartActiveStyles, homeActiveStyles } from './activeStyles';

const Header = () => (
  <header>
    <NavLink exact to='/' activeStyle={homeActiveStyles}>
      <h2>Pic Some</h2>
    </NavLink>
    <NavLink to='/cart' activeStyle={cartActiveStyles}>
      <i className='ri-shopping-cart-line ri-fw ri-2x' />
    </NavLink>
  </header>
);

export default Header;
