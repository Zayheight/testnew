import React from "react";
import useToken from "../../page/useToken";


function Sidebar() {
    const { token, setToken } = useToken();

    if(!token) {
        window.location.replace("https://senior-project-ea.vercel.app/Signin");
    }

    return(
      <div >
            <div className="">
                <aside>
                    {/* <div className="sidebar">
                    <Link to='/dashbord' >
                        <h3>Dashbord</h3>
                    </Link>
                    <Link to='/UserManager' >
                        <h3>User Manager</h3>
                    </Link>
                    <Link to='/Summary' >
                        <h3>User</h3>
                    </Link>
                    
                    </div> */}
                </aside>
                
            </div>
        </div>
    );
}

export default Sidebar;