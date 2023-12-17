import React from "react";
import SideBar from "./sidebar";

import Table from "./table";

import "./main.css";

const AdminUserProfile = () => {
  return (
    
      <div className="container rounded-4" style = {{padding : '0px'}}>
        <div className="card rounded-4 w-100" >
            <div className="card-header rounded-4" style = {{backgroundColor : '#0275d8', color : 'white', border : '5px solid #0275d8'}}>   
                <h1>USER PROFILE</h1>
            </div>
        
        <div className = "card-body">

        <div class="d-flex flex-row bd-highlight mb-2">
         <div class="p-2 bd-highlight">
            <SideBar/>
         </div>
         <div class="p-2 bd-highlight" className="table2">
            <h1 className="bookingTable">BOOKINGS HISTORY</h1>
            <div className="t">
            <Table/>
            </div>
         </div>
         
        </div>
            {/* <div>
             <SideBar/>
             </div>
             
             <div>
             <Table/>
            </div> */}
         
        </div>
        
        </div>
      </div>
    
  );
};

export default AdminUserProfile;