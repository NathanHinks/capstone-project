import { CartContextProvider } from './CartContext';
import { PhotoContextProvider } from './PhotoContext';

const AppContextProvider = ({ children }) => (
  <PhotoContextProvider>
    <CartContextProvider>
      { children }
    </CartContextProvider>
  </PhotoContextProvider>
);


export default AppContextProvider;