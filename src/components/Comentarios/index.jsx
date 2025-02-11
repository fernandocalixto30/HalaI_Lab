import user1 from '../../assets/user1.svg';
import user2 from '../../assets/user2.svg';
import user3 from '../../assets/user3.svg';
import user4 from '../../assets/user4.svg';
import user5 from '../../assets/user1.svg';
import user6 from '../../assets/user1.svg';
import user7 from '../../assets/user1.svg';
import user8 from '../../assets/user1.svg';
import user9 from '../../assets/user1.svg';
import './style.css'
const Coment = () => {
  return (
    <section className="secao-comentarios">
    <div className="secao-comentarios-title">
        <h1>You are in good company</h1>
        <p>Create intuitive automations and authentic chatbots to deliver outstanding customer experiences via chat.
        </p>
    </div>
    <div className="comments-container">


        <div className="comment-card-flex">
            <div className="comment-card">
                <p className="comment">“Customers will not download an extra app for pharmacies or the e-prescription.
                    In my opinion, WhatsApp is the most natural solution here.”</p>
                <div className="user-info">
                    <img src={user1} alt="User 1" className="user-photo" />
                    <span className="user-name">Adrian Knoch</span>
                </div>
            </div>
            <div className="comment-card">
                <p className="comment">“Customers will not download an extra app for pharmacies or the e-prescription.
                    In my
                    opinion, WhatsApp is the most natural solution here.”</p>
                <div className="user-info">
                    <img src={user2} alt="User 1" className="user-photo" />
                    <span className="user-name">Adrian Knoch</span>
                </div>
            </div>
            <div className="comment-card">
                <p className="comment">“Customers will not download an extra app for pharmacies or the e-prescription.
                    In my
                    opinion, WhatsApp is the most natural solution here.”</p>
                <div className="user-info">
                    <img src={user3} alt="User 1" className="user-photo" />
                    <span className="user-name">Adrian Knoch</span>
                </div>
            </div>
        </div>

        <div className="comment-card-flex">

            <div className="comment-card">
                <p className="comment">“Customers will not download an extra app for pharmacies or the e-prescription.
                    In my
                    opinion, WhatsApp is the most natural solution here.”</p>
                <div className="user-info">
                    <img src={user4} alt="User 1" className="user-photo" />
                    <span className="user-name">Adrian Knoch</span>
                </div>
            </div>
            <div className="comment-card">
                <p className="comment">“Customers will not download an extra app for pharmacies or the e-prescription.
                    In my
                    opinion, WhatsApp is the most natural solution here.”</p>
                <div className="user-info">
                    <img src={user5} alt="User 1" className="user-photo" />
                    <span className="user-name">Adrian Knoch</span>
                </div>
            </div>
            <div className="comment-card">
                <p className="comment">“Customers will not download an extra app for pharmacies or the e-prescription.
                    In my
                    opinion, WhatsApp is the most natural solution here.”</p>
                <div className="user-info">
                    <img src={user6} alt="User 1" className="user-photo" />
                    <span className="user-name">Adrian Knoch</span>
                </div>
            </div>
        </div>
        <div className="comment-card-flex">
            <div className="comment-card">
                <p className="comment">“Customers will not download an extra app for pharmacies or the e-prescription.
                    In my
                    opinion, WhatsApp is the most natural solution here.”</p>
                <div className="user-info">
                    <img src={user7} alt="User 1" className="user-photo" />
                    <span className="user-name">Adrian Knoch</span>
                </div>
            </div>
            <div className="comment-card">
                <p className="comment">“We can map our entire sales process in Superchat&apos; messaging software. We have aseparate mailbox for each phase. That makes our work clear.”</p>
                <div className="user-info">
                    <img src={user8} alt="User 2" className="user-photo" />
                    <span className="user-name">Andreas Niemiec</span>
                </div>
            </div>
            <div className="comment-card">
                <p className="comment">“Our communication has been more efficient, simpler and clearer since the
                    implementation of Superchat.”</p>
                <div className="user-info">
                    <img src={user9} alt="User 3" className="user-photo" />
                    <span className="user-name">Christian Schuder</span>
                </div>
            </div>
        </div>



    </div>

</section>
  )
}

export default Coment