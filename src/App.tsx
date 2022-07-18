import Canvas from './components/canvas/Canvas';
import Navbar from './components/navbar/Navbar';
import ContactMe from './components/section/ContactMe';
import MyPortfolio from './components/section/MyPortfolio';
import MyProjects from './components/section/projects/MyProjects';
import PortfolioSection from './components/section/PortfolioSection';
import Sidebar from './components/sidebar/Sidebar';
import React, { useEffect, useRef, useState } from 'react';

function App() {
  const hero = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const [previousSection, setPreviousSection] = useState<React.RefObject<HTMLElement> | null>(null);
  const [currentSection, setCurrentSection] = useState<React.RefObject<HTMLElement>>(hero);
  const [nextSection, setNextSection] = useState<React.RefObject<HTMLElement> | null>(projects);

  const listenToWheel = (event: React.WheelEvent) => {
    event.target.removeEventListener('wheel', (event: any) => listenToWheel(event));

    
    if (event.deltaY < 0) {

    } else if (event.deltaY > 0) {
      console.log(nextSection!.current!.offsetTop);
      window.scrollTo({
        top: nextSection!.current!.offsetTop,
        behavior: "smooth"

      })
    }
    setTimeout(() => {
      event.target.addEventListener('wheel', (event: any) => listenToWheel(event));
    }, 3000);
  };

  useEffect(() => {
    window.addEventListener('wheel', (event: any) => listenToWheel(event));
  }, []);
  return (
    <div className="App">
      <Navbar />
      
      <Canvas />

      <PortfolioSection>
        <MyPortfolio hero={hero} />
      </PortfolioSection>

      <PortfolioSection>
        <MyProjects projects={projects}/>
      </PortfolioSection>

      <PortfolioSection>
        <ContactMe contact={contact}/>
      </PortfolioSection>

      <Sidebar />
    </div>
  );
}

export default App;
