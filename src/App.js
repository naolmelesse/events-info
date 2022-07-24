import './App.scss';
import Nav from './components/nav';
import Banner from './components/banner';
import Testimonial from './components/testimonial';
import Footer from './components/footer';
import Carousel from './components/carousel';
import Online from './components/Online';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ServiceBanner from './components/service-banner';
import Courses from './components/courses';
import UnlockCourses from './components/unlock-courses';
import ContactUs from './components/contact-us';
function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path='/' element={<><Banner/><Online/><Carousel/><Testimonial/></>} />
          <Route path="/service" element={<><ServiceBanner/><Courses/><UnlockCourses/></>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
        </Routes>

        
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
