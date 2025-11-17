import {
  AboutSection,
  Contact,
  Footer,
  Header,
  Projects,
  Skills,
  ThemeSwitch,
} from './components';
import { ThemeProvider } from './context';

export const PortfolioApp = () => {
  return (
    <ThemeProvider>
      <ThemeSwitch />
      <Header />
      <AboutSection />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
};
