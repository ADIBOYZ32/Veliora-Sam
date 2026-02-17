import { Navigation } from "./components/Navigation";
import { Home } from "./components/Home";
import { AboutMe } from "./components/AboutMe";
import { Services } from "./components/Services";
import { ContactMe } from "./components/ContactMe";
import { CustomCursor } from "./components/CustomCursor";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#1a0b14] to-[#0a0a0f] text-white" style={{ cursor: 'none' }}>
      <CustomCursor />
      <Navigation />
      <Home />
      <AboutMe />
      <Services />
      <ContactMe />
    </div>
  );
}
