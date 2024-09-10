import { BrowserRouter } from "react-router-dom"
import {About,Contact,Experience,Hero,Navbar,Tech,Works,StarsCanvas} from './components'
import { useEffect, useState } from "react";
import { isWebGL2Available } from '@react-three/drei';
const App = ()=> {
  const [isWebGL2Supported, setWebGL2Supported] = useState(true);
  const [alertShown, setAlertShown] = useState(false); // Flag to control alert

  useEffect(() => {
    // Check if WebGL2 is available
    if (!isWebGL2Available()) {
      setWebGL2Supported(false);
      if (!alertShown) {
        alert("Your browser doesn't support WebGL2, so you're viewing a simplified version of the site. For the full experience, please update or switch your browser.");
        setAlertShown(true); 
      }
    }
  }, [alertShown]);
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat-bg-center">
          <Navbar />
          <Hero isWebGL2Supported={isWebGL2Supported}/>
        </div>
        <About />
        <Experience />
        {isWebGL2Supported && <Tech />}
        <Works />
        <div className="relative z-0">
          <Contact isWebGL2Supported={isWebGL2Supported}/>
          {isWebGL2Supported && <StarsCanvas />}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
