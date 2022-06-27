import Canvas from './components/canvas/Canvas';
import ContactMe from './components/section/ContactMe';
import MyPortfolio from './components/section/MyPortfolio';
import MyProjects from './components/section/MyProjects';
import PortfolioSection from './components/section/PortfolioSection';

function App() {
  return (
    <div className="App">
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


    </div>
  );
}

export default App;
