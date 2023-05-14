import { Fragment } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Contact from './pages/Contact';
import Home from './pages/Home';
import OurTeam from './pages/OurTeam';
import About from './pages/About';
import Login from './pages/Login';
import Booking from './pages/Booking';
import Error404 from './pages/Error404';
import Faqs from './pages/Faqs';
import BlogDetails from './pages/BlogDetails';
import BlogGrid from './pages/BlogGrid';
import Register from './pages/Register';
import Forgot from './pages/Forgot';
import Services from './pages/Services';
import ServicesDetails from './pages/ServiceDetails';






const routes = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/> }>
     <Route path= '/home' element={<Home/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route  path='/ourteam' element={<OurTeam/>}/>
     <Route  path='/about' element={<About/>}/>
     <Route  path='/login' element={<Login/>}/>
     <Route  path='/Register' element={<Register/>}/>
     <Route  path='/Forgot' element={<Forgot/>}/>
     <Route  path='/Booking' element={<Booking/>}/>
     <Route  path='/Error404' element={<Error404/>}/>
     <Route  path='/Faqs' element={<Faqs/>}/>
     
     <Route  path='/BlogDetails' element={<BlogDetails/>}/>
     <Route  path='/BlogGrid' element={<BlogGrid/>}/>
     <Route  path='/Services' element={<Services/>}/>
     <Route  path='/ServicesDetails' element={<ServicesDetails/>}/>
     
     
  </Route>
))
  

function App() {
  return (
    <Fragment>
 <RouterProvider router={routes}/>
    </Fragment>

  );
}

export default App;
