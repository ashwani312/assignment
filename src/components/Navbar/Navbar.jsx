import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <div className="logo">
          <img src="https://www.buildpiper.io/wp-content/uploads/2022/05/logo_black.png" alt="" />
        </div>
        <div className="dashboard"> <span><i class="fa-solid fa-angle-right"></i></span>	 DashBoard</div>
      </div>
      <div className="right">
        <div className="lenskart">
             <img src="https://1000logos.net/wp-content/uploads/2022/10/Lenskart-Logo.png" alt="" />
        </div>
        <div className="account">
          <div className='accountName'>
          <h4>Super Admin</h4>
            <span>Super Admin</span>
          </div>
          <div className='accountProfile'>
           SA
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Navbar