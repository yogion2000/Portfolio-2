import { Outlet,Link } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../node_modules/bootstrap/dist/js//bootstrap.js'
import './Layout.css'

const Layout=()=>{
    return(
        <>
<nav class="navbar navbar-expand-lg sticky-top">
        <div class="container-fluid">
          <a class="navbar-brand logo">YOGESH</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" style={{backgroundColor: "white"}}>
            <span class="navbar-toggler-icon" style={{color: "white"}}></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <a class="nav-link " aria-current="page"><Link to="/Home" className="navli">Home</Link></a>
              <a class="nav-link "><Link to="/About" className="navli text-white">About</Link></a>
              <a class="nav-link "><Link to="/Education" className="navli text-white">Education</Link></a>
              <a class="nav-link "><Link to="/Technical" className="navli text-white">Technical Skills</Link></a>
              <a class="nav-link "><Link to="/Designing" className="navli text-white">Designing Skills</Link></a>
              <a class="nav-link "><Link to="/Certification" className="navli text-white">Certification</Link></a>
              <a class="nav-link "><Link to="/Achievements" className="navli text-white">Achievements</Link></a>
              <a class="nav-link "><Link to="/Projects" className="navli text-white">Projects</Link></a>
              <a class="nav-link "><Link to="/Contact" className="navli text-white">Contact</Link></a>
            </div>
          </div>
        </div>
      </nav>
        <Outlet/>
        </>
    );
}
export default Layout;