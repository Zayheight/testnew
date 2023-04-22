// import Navbar from "../component/navbar";
// import Footers from "../component/footter";
// import FormloginNew from "../component/login/formlogin";
// import { Fragment } from "react";
// import useToken from "./useToken";
// import '../css/signin.css'
// import imgSignup from '../img/Computerlogin-amico.png'



// function Signin() {
//   const { token, setToken } = useToken();
//   //console.log("test1");

//   if (!token) {
//     return (
//       <Fragment>
//         <Navbar></Navbar>
//         <div className="Signin">
//           <div className="landingpage">
//             <div className="Box-login">
//               <FormloginNew setToken={setToken} />
//               <div className="imglogin">
//                  <img className="contenimg2" src={imgSignup} alt=""/>
//               </div>
//             </div>
//           </div>
//         </div>

//         <section>
//           <Footers></Footers>
//         </section>

//       </Fragment>
//     );
//   }else{
//     var str1 = sessionStorage.getItem("token").replace(/(")/, "");
//     var str2 = str1.replace(/(")/, "");
//     if(str2=="admin"){
//       window.location.replace("http://13.215.153.220:3000/dashbord");
//     }
//     else{
//       window.location.replace("http://13.215.153.220:3000/");
//     }
//   }
// }

// export default Signin;
