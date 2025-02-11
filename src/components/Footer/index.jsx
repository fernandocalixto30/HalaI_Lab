import './style.css'
import logo from "../../assets/logo.jpg"
import iconphone from "../../assets/icon-phone.svg"
import iconmesage from "../../assets/icon-mesage.svg" 
const Footer = () => {
  return (
    <footer className="footer">
    <div className="content-footer">
        <div className="content-contact">
            <div className="logo-footer"><img src={logo} alt=""/>
                <h1>Halal_Lab</h1>
            </div>
            <p>
                Superchat - The name says it all
            </p>

        </div>
        <div className="footer-content-group-contant">
            <div className="footer-footer-phone">
                <img src={iconphone} alt=""/>
                <p>+44 1224 051727</p>
            </div>
            <div className="footer-footer-mensage">
                <img src={iconmesage} alt=""/>
                <p>hello@superchat.com </p>
            </div>
        </div>

    </div>
    <div className="content-links">
        <div className="content-links-card">
            <div className="content-links-card-title">
                <h3>Product</h3>
            </div>
            <div className="content-links-card-links">
                <a href="">WhatsApp Newsletter</a>
                <a href="">Automations</a>
                <a href="">Integrations</a>
                <a href="">Universal inbox</a>
                <a href="">Webchat</a>
            </div>
        </div>
        <div className="content-links-card">
            <div className="content-links-card-title">
                <h3>About</h3>
            </div>
            <div className="content-links-card-links">
                <a href="">The goods</a>
                <a href="">Careers</a>
                <a href="">Integrations</a>
                <a href="">Universal inbox</a>
                <a href="">Webchat</a>
            </div>
        </div>
        <div className="content-links-card">
            <div className="content-links-card-title">
                <h3>App</h3>
            </div>
            <div className="content-links-card-links">
                <a href="">API Documentation</a>
                <a href="">Automations</a>
                <a href="">Integrations</a>
                <a href="">Universal inbox</a>
                <a href="">Webchat</a>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer