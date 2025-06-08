
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js';
import Hero from './components/Hero/Hero.js';
import ContactUs from "./components/ContactUs/ContactUs.jsx"
import CompanyDetails from './components/CompanyDetails/CompanyDetails.jsx';
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <ContactUs/>
      <CompanyDetails />
    </div>
  );
}

export default App;
