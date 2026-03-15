import { useState } from "react";
import "./Navbar.css";

function Navbar() {

  const [dropdown,setDropdown] = useState(false)

  return (
    <nav className="navbar">

      <div className="logo">
        Kunalkumar<span>.dev</span>
      </div>

      <div className="searchBox">

  <input type="text" placeholder="What are you looking for?" />

  <button className="searchBtn">
    🔍
  </button>

</div>

    <ul className="menu">

  <li
  className="exploreItem"
  onMouseEnter={()=>setDropdown(true)}
  onMouseLeave={()=>setDropdown(false)}
  >

    Explore

    {dropdown && (
      <div className="dropdown">
        <p>About</p>
        <p>Contact</p>
        <p>Newsletter</p>
      </div>
    )}

  </li>

  <li>Talent</li>
  <li>Blog</li>

</ul>

      <div className="profile">
        <img src="https://media.licdn.com/dms/image/v2/D5603AQECMFRJKFe5Ug/profile-displayphoto-scale_400_400/B56Zzcoyg0IYAg-/0/1773228207432?e=2147483647&v=beta&t=ld5jHIFEIWFRkjioQyUk0lKqIkJjYcfviNA0_3jiuC8"/>
      </div>

    </nav>
  )
}

export default Navbar