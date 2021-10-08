import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { cartActiveStyles, homeActiveStyles } from './activeStyles';
import { CartContext } from '../../contexts/CartContext';

const Header = () => {
  const { cartIsEmpty } = useContext(CartContext);
  return (
    <header>
      <NavLink exact to='/' activeStyle={ homeActiveStyles }>
        <h2>Pic Some</h2>
      </NavLink>
      <NavLink to='/cart' activeStyle={ cartActiveStyles }>
        { cartIsEmpty ? (
          <i className='ri-shopping-cart-line ri-fw ri-2x' />
        )
          :
          (<i className='ri-shopping-cart-fill ri-fw ri-2x' />)
        }
      </NavLink>
    </header>
  );
};

export default Header;
