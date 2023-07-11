import Header from 'components/Header';
import HeroSection from 'components/HeroSection';
import Categories from 'components/Categories';
import Mobile from 'components/Mobile';
import Cards from 'components/Cards';
import Footer from 'components/Footer';
import Container from './container/container.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Categories />
      <Mobile />

      <Cards />

      <Footer />
    </div>
  );
}

export default App;
