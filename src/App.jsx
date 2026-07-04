
import {Routes,Route} from 'react-router-dom'
import Appnavbar from './components/Appnavbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Home from './pages/Home';
import Latestnews from './pages/Latestnews';


import './App.css'

function App() {


  return (
  <>
    <Appnavbar/>
    <Container className = "mt-5">
      <Routes>
      <Route path = "/" element ={<Home/>}/>

    
         <Route path = "/latest-news" element ={<Latestnews/>}/>

    </Routes>
  
    </Container>
    </>
  )
}

export default App
