
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Route/routes';
import Context from './Context/Context';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
