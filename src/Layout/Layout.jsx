import { Outlet } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
  return (
    <>
    <div className=" 2xl:w-[1500px] mx-auto">
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
    </>
  )
}

export default Layout;