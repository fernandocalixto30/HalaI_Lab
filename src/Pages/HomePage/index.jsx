import About from "../../components/About/index"
import Coment from "../../components/Comentarios/index"
import Footer from "../../components/Footer"
import Intuitive from "../../components/Intuitive/index"
import NavBar from "../../components/NavBar/index"
import StartIdentity from "../../components/StartIdentity/index"


const HomePage = () => {
  return (
    <>
      <NavBar />
      <StartIdentity />
      <About />
      <Intuitive />
      <Coment />
      <Footer />
    </>

  )
}

export default HomePage