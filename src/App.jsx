import './App.css'
import Header from "./header/Header";
import Footer from "./footer/Footer";
import WaitlistInfo from "./Components/WaitlistInfo.jsx";
import WaitlistForm from "./Components/WaitlistForm";
/**import {store} from "./js/store";
import {Provider} from "react-redux";**/

 
function App() {
  return (
    <div style={{margin: 0, padding: 0, boxSizing: "border-box"}}>
      <Header />
      <main>
  <WaitlistInfo />
  <WaitlistForm />
</main>
      <Footer />
    </div>
  )
}

export default App
