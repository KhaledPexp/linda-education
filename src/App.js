
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Route/routes';
import Context from './Context/Context';


function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
