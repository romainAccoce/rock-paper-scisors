import './app.scss';
import Home from '../Home';
import Header from '../Header';
import Footer from '../Footer';
import RulesModal from '../RulesModal';

import { useSelector } from 'react-redux';

const App = () => {

  const { displayRules } = useSelector((state) => state.displayOptions);

  return (
    <div className="App">
      <Header />
      {displayRules && <RulesModal />}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
