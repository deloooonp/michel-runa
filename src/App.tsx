import Hero from "./components/Hero";
import SaveTheDate from "./components/SaveTheDate";
import Profile from "./components/Profile";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Story from "./components/Story";
import Gift from "./components/Gift";
import Footer from "./components/Footer";
import WelcomeOverlay from "./components/WelcomeOverlay";
import { useState } from "react";

import MusicControl from "./components/MusicControl";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setIsPlaying(true);
  };

  const toggleMusic = () => {
    setIsPlaying((prev) => !prev);
  };
  return (
    <main className="max-w-300 mx-auto">
      {!open && <WelcomeOverlay onOpen={handleOpen} />}
      <Hero />
      <SaveTheDate />
      <Profile />
      <Events />
      <Gallery />
      <Story />
      <Gift />
      <Footer />
      <MusicControl isPlaying={isPlaying} onToggle={toggleMusic} />
      <ScrollToTop />
    </main>
  );
}

export default App;
