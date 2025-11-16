import { AboutSection, Header, Projects, Skills } from "./components";

export const PortfolioApp = () => {
  return (
    <div className="container">
      <Header />
      <AboutSection />
      <Projects />
      <Skills />
      <footer></footer>
    </div>
  );
};
