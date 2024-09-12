import React, { useEffect, useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 751px)');
    setisMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setisMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);
  return (
    <>
      {!isMobile && <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>}
    </>
  );
};

export default SectionWrapper(Tech, "");
