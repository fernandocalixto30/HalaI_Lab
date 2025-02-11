import iconrelogio from '../../assets/icon-relogio.svg'
import iconmark from "../../assets/icon-mask.svg"
import iconinlove from "../../assets/icon-in-love.svg" 
import iconchat from "../../assets//icon-chat.svg"
import invictus from "../../assets/invictus.jpg"
import './style.css'
const Intuitive = () => {
  return (
<section className="content-automations">
        <div className="content-automation-text">
            <h2>Intuitive toolbox for automations</h2>
            <p>Create intuitive automations and authentic chatbots to deliver </p>
            <p>outstanding customer experiences via chat.</p>
        </div>
        <div className="content-automation-card">
            <div className="content-automation-card-text">
                <div className="content-automation-card-text-titulo">
                    <div>
                        <img src={iconrelogio} alt="0"/>
                    </div>
                    <div className="content-text-automation">
                        <h2>Sales support around the clock.</h2>
                        <p>Automate your sales process by requesting important information
                            in advance and automatically assigning leads to the appropriate
                            -footers.</p>
                        <a className="btn-learn">Learn more</a>
                    </div>

                </div>
                <div className="content-text-automation-safe">
                    <img src={iconmark} alt="1"/>
                    <p>Easily segment your WhatsApp newsletter subscribers</p>
                </div>
                <div className="content-text-automation-safe">
                    <img src={iconinlove} alt="2"/>
                    <p>Automations that support your customer service.</p>
                </div>
                <div className="content-text-automation-safe">
                    <img src={iconchat} alt="3"/>
                    <p>Automated recruitment processes via WhatsApp.</p>
                </div>
            </div>
            <div className="content-automation-card-img"><img src={invictus} alt="4"/></div>
        </div>
    </section>
  )
}

export default Intuitive;