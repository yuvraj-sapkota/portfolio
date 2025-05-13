import AboutMe from "./components/AboutMe";
import HeaderSection from "./components/HeaderSeaction";
import Navbar from "./components/Navbar";
import Service from "./components/Service";

const App = () => {
  return (
    <>
      <Navbar />
      <HeaderSection />
      <AboutMe/>
      <Service/>
    </>
  );
};

export default App;
