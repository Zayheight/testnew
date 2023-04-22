
import Navbar from '../component/navbar';
import ContentProduct from '../component/Eaproduct/contentBoxproduct';
import Footers from '../component/footter';
import '../css/Eaproduct.css'
function Eaproduct() {

  console.log("test");


  return (
    <div>
      <Navbar></Navbar>

      <div className="Eaproduct">
        <div className="landingpage">
            <section>
            <ContentProduct></ContentProduct>
          </section>        
        </div>


        <section>
          <Footers></Footers>
        </section>
      </div>
    </div>
  );
}

export default Eaproduct;
