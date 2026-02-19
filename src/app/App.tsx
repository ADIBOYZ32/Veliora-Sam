import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Home } from "./components/Home";
import { AboutMe } from "./components/AboutMe";
import { Services } from "./components/Services";
import { ContactMe } from "./components/ContactMe";
import { CustomCursor } from "./components/CustomCursor";
import { LoadingScreen } from "./components/LoadingScreen";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#1a0b14] to-[#0a0a0f] text-white overflow-x-hidden" style={{ cursor: 'none' }}>
      {isLoading && <LoadingScreen onFinished={() => setIsLoading(false)} />}

      {!isLoading && (
        <>
          <CustomCursor />
          <Navigation />
          <Home />
          <AboutMe />
          <Services />
          <ContactMe />
        </>
      )}
    </div>
  );
}
