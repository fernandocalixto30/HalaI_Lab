import './style.css'
import imghome from "../../assets/img-home.jpg"
const StartIdentity= () => {
  return (

    <section id="home">
    <div className="content-home">
        <div>
            <h1>Start with your identity</h1>
        </div>
        <div>
            <p>With Identity, you can improve customer sign-ups, employee productivity, and get apps to market
                faster.</p>
        </div>
        <div className="content-btns">
            <a href="" className="btn-free">Free trial</a>
            <a href="" className="btn-talk">Talk to us</a>
        </div>
    </div>
    <div className="content-home-img"><img src={imghome} alt="imghome"/></div>
</section>

  )
}

export default StartIdentity;