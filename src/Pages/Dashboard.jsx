import React from 'react'

const Dashboard = () => {
  return (
    <div className='dash-container'>
      <div className='dash-nav'>
        <div className='nav-black'>
        <p><span>Supa</span>Menu</p>
        <nav>
            <ul>
                <li>Overview</li>
                <li>Clients</li>
                <li>Users</li>
            </ul>
        </nav>

        <ul>
             <li>Settings</li>
             <li>My Account</li>
        </ul>
        </div>
       <div className='nav-orange'>
       </div>
      </div>
      <div className='dash-body'>
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
                <div></div>
                <div></div>
            </div>
            <div className='details-2'>
                <div></div>
                <div></div>
            </div>
            <div className='details-3'>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
