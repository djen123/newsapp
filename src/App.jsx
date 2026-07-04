
import {Routes,Route} from 'react-router-dom'
import Appnavbar from './components/Appnavbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Home from './pages/Home';
import Latestnews from './pages/Latestnews';
import Sport from './pages/Sport';
import Culture from './pages/Culture';
import Tech from './pages/Tech';

import './App.css'

function App() {


  return (
  <>
    <Appnavbar/>
    <Container className = "mt-5">
      <Routes>
      <Route path = "/" element ={<Home/>}/>

    
         <Route path = "/latest-news" element ={<Latestnews/>}/>
          <Route path="/sport" element={<Sport />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/tech" element={<Tech />} />

    </Routes>
  
    </Container>
    </>
  )
}

export default App
