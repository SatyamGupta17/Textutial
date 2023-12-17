import Image from './adminProfile.png';
import './adminprofile.css';
import Image2 from './comments.png';
export default function AdminUserProfile(){
    return(
        <div className = 'background-container dual-background'>
            <div className = "container-fluid">
                <div className='row'>
                    
                <div className = "col-4" >
                    <div className = "row double-border" style = {{margin : '20px'}}>
                        <img src= {Image} alt="" style = {{width : '100%'}}/>
                    </div>
                    <div className = 'row'  style = {{margin : '20px'}}>
                        <h3 style = {{borderBottom : '2px solid black', padding : '10px'}}>Contact Details:</h3>
                        <div className = 'row'>
                            <div className = 'col-4'><strong>Phone:</strong></div>
                            <div className = 'col-8'>1234-4343-32</div>
                        </div>
                        <div className = 'row'>
                            <div className = 'col-4'><strong>Email:</strong></div>
                            <div className = 'col-8'>user@nitj.ac.in</div>
                        </div>
                        <div className = 'row'>
                            <div className = 'col-4'><strong>Address:</strong></div>
                            <div className = 'col-8'>xyz, urban state, Punjab</div>
                        </div>
                    </div>
                </div>
                <div className = "col-8">
                    <div className = 'row text-center' style = {{margin : '20px', color : 'white'}}>
                        <h2><strong>ADMIN NAME</strong></h2>
                    </div>
                    <div className='row' style = {{marginLeft: '20px', display: 'inline'}}>
                        <img src= {Image2}alt="Comment Image" style = {{width: '50px', display: 'inline'}} href = '#' />
                        <span  style = {{color : 'white', display: 'inline', fontSize: '1em'}}>Send Message</span>
                        
                    </div>

                    <div className = 'admin-info-container row'>
                        <div className = 'col-2'></div>
                        <div className='col-8'>

                        <div className='row'>
                        <h3 style = {{borderBottom : '2px solid black', padding : '10px'}}>Admin Information :</h3>

                        </div>
                        <div className = 'row'>
                            <div className = 'col-6'><strong>Designation:</strong></div>
                            <div className = 'col-6'>Admin</div>
                        </div>
                        <div className = 'row'>
                            <div className = 'col-6'><strong>DOJ:</strong></div>
                            <div className = 'col-6'>12 nov 2022</div>
                        </div>
                        <div className = 'row'>
                            <div className = 'col-6'><strong>Gender:</strong></div>
                            <div className = 'col-6'>Male</div>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}