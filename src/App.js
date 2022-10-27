import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import './App.scss';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';


function App() {
  return (
    <>
      <Routes>
      {/* 
      An <Outlet> should be used in parent route elements
       to render their child route elements. 
       This allows nested UI to show up when child routes are rendered.
        If the parent route matched exactly, 
        it will render a child index route or nothing if there is no index route.
       */}
        <Route path='/' element={<Layout />} >   

          <Route index element={ <Home />} />
          <Route path='about'  element={ <About /> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
