import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DesktopHeader from './components/Headers/desktopHeader/DesktopHeader';
import MobileHeader from './components/Headers/mobileHeader/MobileHeader';

const App = () => {
  return (
    <BrowserRouter>
      <section className="">
        <DesktopHeader />
        {/* <MobileHeader /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
