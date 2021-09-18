import { Route, Switch } from 'react-router-dom';

import Header from '../Header';
import Cart from '../pages/Cart';
import PhotoGrid from '../pages/PhotoGrid';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <PhotoGrid/>
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
