import About from "../../components/About"
import Coment from "../../components/Comentarios"
import Footer from "../../components/Footer"
import Intuitive from "../../components/Intuitive"
import NavBar from "../../components/NavBar"
import StartIdentity from "../../components/StartIdentity"


const HomePage= () => {
  return (
    <>
      <NavBar/>
  <StartIdentity/>
  <About/>
  <Intuitive/>
  <Coment/>
<Footer/> 
    </>

  )
}

export default HomePage