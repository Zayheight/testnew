import Navbar from '../component/navbar';
import About1 from '../component/About/aboutus1';
import Footers from '../component/footter';
import '../css/about.css'
function About() {

  return (
    <div>
      <Navbar></Navbar>
      <div className="About">
        <div className="landingpage">
        <section className='test3'>
            <About1></About1>
          </section>
         </div>

        <Footers></Footers>
      </div>
    </div>
    
  );
}

export default About;
