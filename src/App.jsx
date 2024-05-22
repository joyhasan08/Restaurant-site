
import { Outlet } from 'react-router-dom';
import './App.css'
import FooterSection from './Component/Footer/FooterSection';
import NavBarPraimary from './Component/Navbar/NavBarPraimary';


function App() {


  return (
    <>
      <div className='w-full' >
        <NavBarPraimary />
        <Outlet></Outlet>
      </div>
      <div>
        <FooterSection></FooterSection>
      </div>
    </>
  )
}

export default App
