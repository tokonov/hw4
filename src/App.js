import logo from './logo.svg';
import './App.css';
import AboutUsPage from "./pages/aboutUsPage/AboutUsPage";
import PortfolioPage from "./pages/portfolioPage/PortfolioPage";
import ContactPage from "./pages/contactPage/ContactPage";

function App() {
  return (
    <div className="App">
        <AboutUsPage/>
        <PortfolioPage/>
        <ContactPage/>
    </div>
  );
}

export default App;
