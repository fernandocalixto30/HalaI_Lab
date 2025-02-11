import './style.css'
import logo from '../../assets/logo.jpg';
import arrow from '../../assets/arrow.jpg';
const NavBar = () => {
  return (
    <header className="header">
    <div className="logo">
        <img src={logo} alt="" />
      
        <h1>Halal_Lab</h1>
    </div>
    <ul>
        <li><a href="#"><select className="cars">
                    <option value="volvo">Cards</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                </select></a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">App </a></li>
    </ul>
    <div className="btns">
        <a href="#" className="btn-login">Login</a>
        <a href="#" className="btn-apply">Apply now <img src={arrow} alt="imgarrow"/> </a>
    </div>
</header>
  )
}

export default NavBar