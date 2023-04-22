// import "../css/home.css";
// import "../css/dashbord.css";
// import Axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// import Sidebar from "../component/admin/sidebar";
// import Navbar from "../component/navbar";
// import useToken from "./useToken";

// import ModelupdatePort from "../component/admin/ModelUpdate_userinfo";

// import { UserAddOutlined } from "@ant-design/icons";
// import { message, Popconfirm, AutoComplete, Button} from "antd";

// function Dashbord() {

//   const { token, setToken } = useToken();
//   const [userlist, setuserlist] = useState([""]);
//   const [porttabel, setudataporttabel] = useState([""]); //  ดึงข้อมูล,เซ็ต
//   const [user, setuser] = useState([""]);
//   const [userid, setuserid] = useState();
//   //FOR UPDATE
//   const [open, setOpen] = useState(false);
//   const [Emailinfo, setEmailinfo] = useState();
//   const [Nameinfo, setNameinfo] = useState();
//   const [userid_update, setuserid_update] = useState();

//   const [emailsearch, setemailsearch] = useState("");
//   const [issearch, setbtnsearch] = useState(false);

//   if(!token) {
//     window.location.replace("http://13.215.153.220:3000/Signin");
//   }
//   useEffect(() => {
//     Axios.get("http://13.215.153.220:3001/user").then((res) => {
//       setuserlist(res.data);
//     });
//     Axios.get("http://13.215.153.220:3001/port").then((res) => {
//       setudataporttabel(res.data);
//     });

//   },[]);

//   //console.log("test");
//   useEffect(()=>{
//     setuser(userlist);
//   },userlist)

//   const filtersearch = userlist.filter((obj) => {
//     if (obj.email === emailsearch) {
//       return obj.email === emailsearch;
//     }
//   });
//   function setdatatabel() {
//     if (emailsearch==="" ||issearch === false) {
//       setuser(userlist);
//     } else setuser(filtersearch);
//   }

//   //findport for delete
//   const filteruserport = porttabel.filter((obj) => {
//     return obj.user_id === userid;
//   });
//   //console.log(filteruserport);

//   const deletetran = async (portnum) => {
//     //console.log(portnum);
//     await Axios.delete(`http://13.215.153.220:3001/deletetran/${portnum}`).then(
//       (response) => {
//         console.log(response);
//       }
//     );
//   };
//   const deleteport = async (portnum) => {
//     await Axios.delete(`http://13.215.153.220:3001/deleteport/${portnum}`).then(
//       (response) => {
//         console.log(response);
//       }
//     );
//   };
//   const deleteuser = async (userid) => {
//     await Axios.delete(`http://13.215.153.220:3001/deleteuser/${userid}`).then(
//       (response) => {
//         console.log(response);
//       }
//     );
//   };

//   //Search
//   const onChange = (e) => {
//     setbtnsearch(true);
//     setemailsearch(e);
//     setdatatabel();

//    // console.log(`onChange ${e}`);
//     console.log(emailsearch);


//   };
//   const onSearch = (e) => {
//     console.log("onsearch:", e);
//     setbtnsearch(false);
//   };
  
//   //popupdelete
//   const confirm = (e) => {
//     filteruserport.map((val) => {
//       deletetran(val.port_number);
//     })
//     filteruserport.map((val) => {
//       deleteport(val.port_number);
//     })
//     deleteuser(userid);
//     message.success("Success!");
//   };
//   const cancel = (e) => {
//     //console.log(e);
//     message.error("Cancel");
//   };

//   const setdeleteuser_id = (e) => {
//     setuserid(e);
//   };

//   const onUpdate =async (values) => {
//     console.log(values);
//     console.log(userid_update);
//     setOpen(false);

//     await Axios.put("http://13.215.153.220:3001/updateuUserinfo", {
//       Userid: userid_update,
//       Name: values.Name,
//       email:values.email }
//       ).then((response) => {
//         if (response.data.msg === "update Success") {
//           message.success("update data success");
//         } else if(response.data.msg === "This email already exists") {
//           message.error("This email already exists");
//         }
//       }
//     );

//   };

//   return (
//     <div>
//       <Navbar></Navbar>
//       <div className="landingpage_dashbord">
//         <div className="container">
//           <Sidebar></Sidebar>
//           <main>
//             <h1>สมาชิกทั้งหมด</h1>
//             <Button className="btnadduser" type="primary" icon={<UserAddOutlined />}>
//               <Link to="/UserManager"> เพิ่มผู้ใช้ </Link>
//             </Button>

//             <div className="recent-orders">
//               <h2> </h2>

//               <AutoComplete
//                 onChange={onChange}
//                 onSearch={onSearch}
//                 style={{
//                   width: 300,
//                 }}
//                 options={userlist.map((val, index) => {
//                   return {
//                     label: val.email,
//                     value: val.email,
//                     key: index,
//                   };
//                 })}
//                 placeholder="Search email"
//                 filterOption={(inputValue, option) =>
//                   option.value
//                     .toUpperCase()
//                     .indexOf(inputValue.toUpperCase()) !== -1
//                 }
//               />

//               <table className="tables">
//                 <thead>
//                   <tr>
//                     <th>ID</th>
//                     <th>NAME</th>
//                     <th className="mail-hidden">EMAIL</th>
//                     <th className="pass-hidden" >PASSWORD</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {user.map((val) => {
//                     return (
//                       <tr>
//                         <td>{val.user_id}</td>
//                         <td>{val.user_name}</td>
//                         <td className="mail-hidden">{val.email}</td>
//                         <td className="pass-hidden">{val.password} </td>
//                         <td>
//                           <Popconfirm
//                             title="Delete?"
//                             style={{}}
//                             description="Are you sure to delete this user?"
//                             onConfirm={confirm}
//                             onCancel={cancel}
//                             okText="Delete"
//                             cancelText="Cancel"
//                           >
//                             <Button
//                               onClick={() => {
//                                 setdeleteuser_id(val.user_id);
//                               }}
//                               type="text"
//                               danger
//                             >
//                               Delete
//                             </Button>
//                           </Popconfirm>
//                         </td>
//                         <td>
//                           <Button
//                             type="text"
//                             style={{
//                               color:'#13c2c2',
//                             }}
//                             onClick={() => {
//                               setuserid_update(val.user_id)
//                               setEmailinfo(val.email)
//                               setNameinfo(val.user_name)
//                               setOpen(true);
//                             }}
//                           >
//                             Edit
//                           </Button>
//                           <ModelupdatePort
//                             open={open}
//                             onCreate={onUpdate}
//                             Emailinfo={Emailinfo}
//                             Nameinfo={Nameinfo}
//                             onCancel={() => {
//                               setOpen(false);
//                             }}
//                           />
//                         </td>

//                         <td>
//                           <Link
//                             to=""
//                             className="warning"
//                             state={{ id: val.user_id }}
//                           >
//                             Show all
//                           </Link>
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             </div>

//             <div></div>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashbord;