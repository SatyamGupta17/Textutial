import React, { useState } from 'react';
import "./adminprofile.css";

const AdminProfile = () => {
  const [adminData, setAdminData] = useState({
    name: 'Admin Name',
    Address: 'NITJ',
    dob: '01/01/1990',
    ContactNumber: '123-456-7890',
    email: 'admin@example.com',
    profilePhoto: 'profile.jpg',
  });

  const [newPassword, setNewPassword] = useState('');
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAdminData({ ...adminData, [name]: value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAdminData({ ...adminData, profilePhoto: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleEditProfile = () => {
    setIsEditingProfile(!isEditingProfile);
  };

  const saveProfile = () => { 
    toggleEditProfile();
  };

  const { name, Address, dob, ContactNumber, email, profilePhoto } = adminData;

  return (
    <div className = "container rounded-4 ">
        <div className='card-rounded-4 w-100 border border-rounded-4' style = {{border : "solid #0275d8 0.25px"}}>
            <div className="card-header rounded-4" style = {{backgroundColor : '#0275d8', color : 'white', border : '5px solid #0275d8'}}>   
                <h1>ADMIN PROFILE</h1>
            </div>
            <div className='card-body'>
                {isEditingProfile ? (
                    <div>
                        <table className="table my-4">
                            <tbody>
                            <tr>
                                <th scope="row">Name:</th>
                                <td><input type="text" name="name" value={name} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <th scope="row">Address:</th>
                                <td><input type="text" name="address" value={Address} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <th scope="row">Date of Birth:</th>
                                <td>    <input type="date" name="dob" value={dob} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <th scope="row">Contact Number:</th>
                                <td><input type="text" name="ContactNumber" value={ContactNumber} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <th scope="row">Email id:</th>
                                <td> <input type="text" name="email" value={email} onChange={handleInputChange} /></td>
                            </tr>
                            <tr>
                                <th scope="row">Password</th>
                                <td><input type="password" name="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} /></td>
                            </tr>
                            <tr>
                                <th scope="row">Profile Photo</th>
                                <td><input type="file" accept="image/*" onChange={handleImageChange} /></td>
                            </tr>
                            </tbody>
                        </table> 
                    </div>
                ) : (
                    <div className = "container">
                        <div className = "row">
                         <div className="col-4 mx-auto my-auto" >
                            <img src={profilePhoto} alt="Profile" style={{ width : '180px', height : '180px', borderRadius : '50%' }} />
                         </div>
                         <div className="col-6 my-4">
                         <table className="table">
                            <tbody>
                            <tr>
                                <th scope="row">Name:</th>
                                <td>{name}</td>
                            </tr>
                            <tr>
                                <th scope="row">Address:</th>
                                <td>{Address}</td>
                            </tr>
                            <tr>
                                <th scope="row">Date of Birth</th>
                                <td>{dob}</td>
                            </tr>
                            <tr>
                                <th scope="row">Contact Number:</th>
                                <td>{ContactNumber}</td>
                            </tr>
                            <tr>
                                <th scope="row">Email:</th>
                                <td>{email}</td>
                            </tr>
                            </tbody>
                        </table>   
                            </div> 
                        </div>
                    
                    </div>
                )}
                <div className = "container w-100 my-4 mb-4 mx-5" >
                    <button style = {{backgroundColor: '#0275d8', color : 'white'}} onClick={isEditingProfile ? saveProfile : toggleEditProfile}>
                        {isEditingProfile ? 'Save Profile' : 'Edit Profile'}
                    </button>
                </div>
            </div>
      </div> 
    </div>
  );
};

export default AdminProfile;
