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

function App() {
  const [open, setOpen] = useState(false);
  return (
    <main className="max-w-300 mx-auto">
      {!open && (
        <WelcomeOverlay guestName="Budi Santoso" onOpen={() => setOpen(true)} />
      )}
      <Hero />
      <SaveTheDate />
      <Profile />
      <Events />
      <Gallery />
      <Story />
      <Gift />
      <Footer />
    </main>
  );
}

export default App;
