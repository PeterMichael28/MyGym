
import './App.css'
import {Routes, Route } from 'react-router-dom'
import {Box} from '@mui/material'
import Home from './Pages/Home';
import ExcerciseDetails from './Pages/ExcerciseDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <Box width='400px' sx={{ width: { xl: '1488px'}}} m='auto'>
     <Navbar />
      
      <Routes>
        <Route path='/MyGym' element={<Home /> } />
        <Route path='/MyGym/exercise/:id' element={ <ExcerciseDetails />} />
      </Routes>

      <Footer />
    </Box>
  )
}

export default App
