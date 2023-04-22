import Navbar from "../component/navbar";
import ContenBox1 from "../component/home/ContentBox1";
import ContenBox2 from "../component/home/ContentBox2";
import ContentBoxEa from "../component/home/ContentboxEa";
import Footers from "../component/footter";
import "../css/home.css";

function Homepage() {

  return (
    <div>
        <Navbar></Navbar>
        <div className="home">
        <div className="landingpage">
          <ContenBox1></ContenBox1>

          <div className="">
            <ContenBox2></ContenBox2>
          </div> 
        </div>
        <div className="">
            <ContentBoxEa></ContentBoxEa>
        </div>

        <Footers></Footers>
        </div>
    </div>
  );
}

export default Homepage;
