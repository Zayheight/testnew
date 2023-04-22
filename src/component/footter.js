import React from "react";

import '../css/footer.css';

function Footers(){
    return(
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
            <footer>
            <div className="container">
                <div className="row">
                    <div className="contacts">
                    <h3 >ติดต่อและรับข้อมูลข่าวสารได้ที่</h3>
                        <div className="gridcontac">
                        <a href="https://www.facebook.com/profile.php?id=100057122843991"
                            ><i className="fab fa-facebook" alt="" id="bb"></i></a>
                        <a href="mailto:s6204062616308@email.kmutnb.ac.th"> <i className="fa fa-envelope" aria-hidden="true" alt="" id="bb"></i>
                        </a>
                        <a href="https://line.me/ti/p/ay8m9YktE8"> <i className="fab fa-line" id="bb"></i>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
            </footer>
        </div>
    );
}


export default Footers;