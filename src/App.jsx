import './App.css'
import Header from "./header/Header";
import Footer from "./footer/Footer";
import WaitlistInfo from "./Components/WaitlistInfo.jsx";
import WaitlistForm from "./Components/WaitlistForm";
function App() {
  return (
    <>
      <Header />
      <main>
  <WaitlistInfo />
  <WaitlistForm />
</main>
      <Footer />
    </>
  )
}

export default App
