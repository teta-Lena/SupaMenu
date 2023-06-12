import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import jwtDecode from 'jwt-decode';
import { faAdd, faChartPie, faPeopleGroup, faScrewdriverWrench, faTicket, faUser } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [user,setUser] = useState({});
  if(!token || token == null){
    navigate('/login');
  }
  const {id} = jwtDecode(token);  

  const getUser = async()=> {
    
    try {
      const user = await axios.get(`/u/${id}`);
      console.log(user.data.data);
      setUser(user.data.data);

    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(()=>{
getUser();
  },[])
  return (
    <div className='dash-container'>
      <div className='dash-nav'>
        <div className='nav-black'>
        <p><span>Supa</span>Menu</p>
        <nav>
            <ul>
            
               <li><FontAwesomeIcon icon={faChartPie} style={{padding:"0px 10px"}}/>Overview</li>
            
                <li><FontAwesomeIcon icon={faTicket} style={{padding:"0px 10px"}}/>Clients</li>
          
                <li><FontAwesomeIcon icon={faPeopleGroup} style={{padding:"0px 10px"}}/>Users</li>
            
            </ul>
        </nav>

        <ul>
             <li><FontAwesomeIcon icon={faScrewdriverWrench} style={{padding:"0px 5px"}}/>Settings</li>
             <li><FontAwesomeIcon icon={faUser} style={{padding:"0px 5px"}}/>My Account</li>
        </ul>
        </div>
       <div className='nav-orange'>
       </div>
      </div>
      <div className='dash-body'>
         <div className='flex justify-end py-4 items-center'>
      <li className='list-none'><FontAwesomeIcon icon={faUser} className='px-5 '/>
       </li> <li className='list-none pr-10'>{user.fullnames}</li>
        <li className='list-none  ml-2 mr-10 px-5 text-white bg-red-400 py-2 '>Logout</li>
        </div>
        <div className='num-stats'>
            <div>
                <p>Clients</p>
                <h6>60</h6>
            </div>
            <div>
                <p>Revenues(RWF)</p>
                <h6>3240000</h6>
            </div>
            <div>
                <p>Orders</p>
                <h6>2000</h6>
            </div>
        </div>
        <div className='dash-graph'></div>
        <div className='dash-data-details'>
          
            <div className='details-1'>
           

            <div className="detailed-stats">
             <div>
              <h4>Restaurant</h4>
              <p style={{color:"#f49e06", padding:12}}>View details</p>
             </div>
             <div>
              <h6>sales</h6>
             </div>
             <div>
              <h5>Sole luna</h5>
              <p>46000</p>
             </div>
             <div>
              <h5>Soy</h5>
              <p>14000</p>
             </div>
            </div>
            <div className="detailed-stats">
            <div>
              <h4>Restaurant</h4>
              <p style={{color:"#f49e06", padding:12}}>View details</p>
             </div>
             <div>
              <h6>sales</h6>
             </div>
             <div>
              <h5>Sole luna</h5>
              <p>46000</p>
             </div>
             <div>
              <h5>Soy</h5>
              <p>14000</p>
             </div>


</div>
            
</div>
            <div className='details-2'>
            <div className="detailed-stats">
             <div>
              <h4>Restaurant</h4>
              <p style={{color:"#f49e06", padding:12}}>View details</p>
             </div>
             <div>
              <h6>sales</h6>
             </div>
             <div>
              <h5>Sole luna</h5>
              <p>46000</p>
             </div>
             <div>
              <h5>Soy</h5>
              <p>14000</p>
             </div>
            </div>
            <div className="detailed-stats">
            <div>
              <h4>Restaurant</h4>
              <p style={{color:"#f49e06", padding:12}}>View details</p>
             </div>
             <div>
              <h6>sales</h6>
             </div>
             <div>
              <h5>Sole luna</h5>
              <p>46000</p>
             </div>
             <div>
              <h5>Soy</h5>
              <p>14000</p>
             </div>
</div>
            </div>
            <div className='details-3'>
            <div className="detailed-stats">
             <div className='content'>
              <h4>Create</h4>
              <p style={{color:"#f49e06", padding:12}}>View All</p>
             </div>
             <div className='content'>
              <h6>Today</h6>
             </div>
             <div className='content'>
              <p style={{fontSize:"15px"}}>Create new</p>
              <FontAwesomeIcon icon={faAdd}/>
             </div>
             <div className='line-3'></div>
             <div className="content">
              <form>
            <div className="dash-form">
             <div className='c3-form'>
              <div className='content-3'>
                <input type="checkbox" name="restaurant" />
               <p>Restaurant</p>
                </div>
                  <span className='dash-span'>New</span>
                  </div>

                  <div className='c3-form'>
              <div className='content-3'>
                <input type="checkbox" name="restaurant" />
               <p>Restaurant</p>
                </div>
                  <span className='dash-span'>New</span>
                  </div>

                  <div className='c3-form'>
              <div className='content-3'>
                <input type="checkbox" name="restaurant" />
               <p>Restaurant</p>
                </div>
                  <span className='dash-span'>New</span>
                  </div>
 </div>
             </form>
              
             </div>
        </div>
        </div>
        </div>
      </div>
    </div>
    
  )
}

export default Dashboard
