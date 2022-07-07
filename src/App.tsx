import Canvas from './components/canvas/Canvas';
import Navbar from './components/navbar/Navbar';
import ContactMe from './components/section/ContactMe';
import MyPortfolio from './components/section/MyPortfolio';
import MyProjects from './components/section/projects/MyProjects';
import PortfolioSection from './components/section/PortfolioSection';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Canvas />

      <PortfolioSection>
        <MyPortfolio />
      </PortfolioSection>

      <PortfolioSection>
        <MyProjects />
      </PortfolioSection>

      <PortfolioSection>
        <ContactMe />
      </PortfolioSection>

      <Sidebar />
    </div>
  );
}

export default App;
