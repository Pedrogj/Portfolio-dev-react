import { AboutSection, Contact, Header, Projects, Skills } from "./components";

export const PortfolioApp = () => {
  return (
    <div className="container">
      <Header />
      <AboutSection />
      <Projects />
      <Skills />
      <Contact />
      <footer></footer>
    </div>
  );
};
