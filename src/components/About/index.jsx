import './style.css'
import aboutcard1 from '../../assets/about-card1.jpg';
import aboutcard2 from '../../assets/about-card2.jpg';
import aboutcard3 from '../../assets/about-card3.jpg';
const About = () => {
  return (
    <section id="about">
    <div className="content-about-titulo">
        <h2>
            About us
        </h2>
    </div>

    <div className="content-cadrs">
        <div className="card">
            <div className="img"><img src={aboutcard1}alt=""/></div>
            <div className="card">
                <h2>Sales</h2>
                <p>Boost your sales performance with Superchat.
                    Automate processes, qualify your leads and</p>
            </div>
        </div>

        <div className="card">
            <div className="img"><img src={aboutcard2} alt=""/></div>
            <div>
                <h2>Marketing</h2>
                <p>Boost your sales performance with Superchat.
                    Automate processes, qualify your leads and </p>
            </div>
        </div>

        <div className="card">
            <div className="img"><img src={aboutcard3} alt=""/></div>
            <div>
                <h2>Support</h2>
                <p>Boost your sales performance with Superchat.
                    Automate processes, qualify your leads and</p>
            </div>
        </div>

    </div>
</section>  )
}

export default About