import './My Component/css/style.css'
import Footer from './My Component/Dashboard/Footer';
import NavHeader from './My Component/Dashboard/NavHeader';
import SideBar from './My Component/Dashboard/SideBar';
import Header from './My Component/Dashboard/Header';
import DashBody from './My Component/Dashboard/DashBody';
function App() {
  return (
    <div className='show'>
      <Header/>
      <NavHeader/>
      <SideBar/>
      <DashBody/>
      <Footer/>
    </div>
  );
}

export default App;
