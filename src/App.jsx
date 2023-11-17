
import { Outlet } from 'react-router-dom';
import './App.css'
import NavBar from './Component/Navbar/Navbar';
import FooterSection from './Component/Footer/FooterSection';


function App() {


  return (
    <>
      <div >
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
      <div>
        <FooterSection></FooterSection>
      </div>
    </>
  )
}

export default App
