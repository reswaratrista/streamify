import logo from './logo.svg';
import './App.css';
import Footer from './components/footer.tsx';
import FeatureCard from './components/featureCard.tsx';
import Header from './components/header.tsx';

function App() {
  return (
    <div className="App">
      <FeatureCard/>
      <Footer/>
    </div>
  );
}

export default App;
